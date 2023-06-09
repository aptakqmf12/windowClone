import { useState, useEffect, useRef, ChangeEvent } from "react";
import {
  FormControl,
  Button,
  Input,
  Grid,
  AppBar,
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  CssBaseline,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { emailRule, passwordRule } from "../lib/inputRule";
import { requestLogin } from "../api/sign";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useLoginStore } from "@store/login";
import { generatePhoneNumber } from "@lib/inputRule";
import { ResponseCode } from "../types/index";
import LogoIcon from "@components/icons/logo";
import { useCommonStore } from "@store/common";
import PhoneInput from "@components/common/phoneInput";

export default function Signin() {
  const { isLogin, setLogin, setAccessToken, setRefreshToken } =
    useLoginStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState(localStorage.getItem("id") || "");
  const [emailValid, setEmailValid] = useState<boolean>();
  const [password, setPassword] = useState(localStorage.getItem("pw") || "");
  const [passwordValid, setPasswordValid] = useState<boolean>();
  const [phoneNum, setPhoneNum] = useState<string>("");

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogText, setDialogText] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!emailValid) {
      setOpenDialog(true);
      setDialogText("아이디 비밀번호 형식을 맞춰주세요");
      return;
    }

    requestLogin({ email: email, password })
      .then((res) => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        localStorage.setItem("access_token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);

        setLogin(true);

        if (!remember) return;
        localStorage.setItem("id", email);
        localStorage.setItem("pw", password);
      })
      .catch((error) => {
        if (error.response.data.message === ResponseCode.INVALID_CREDENTIALS) {
          setOpenDialog(true);
          setDialogText("아이디 또는 비밀번호가 일치하지 않습니다.");
        } else if (
          error.response.data.message === ResponseCode.INVALID_REQUEST
        ) {
          setOpenDialog(true);
          setDialogText("아이디 비밀번호를 입력해주세요");
        }
        console.log({ error });
      });
  };

  const handleChange = (e: ChangeEvent<any>) => {
    const generatedNum = generatePhoneNumber(e.target.value);
    setPhoneNum(generatedNum);
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  useEffect(() => {
    setEmailValid(emailRule(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(passwordRule(password));
  }, [password]);

  return (
    <div.wrap>
      <div.sign>
        <div className="head">
          <LogoIcon fill="#ffffff" width={250} />
        </div>

        <div className="body">
          <Box component="form" noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              // label="Email Address"
              placeholder="이메일 주소를 입력하세요."
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              error={emailValid === false}
              helperText={
                emailValid === false ? "이메일 형식에 맞게 입력" : null
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              // label="Password"
              placeholder="비밀번호를 입력하세요."
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordValid === false}
              helperText={
                passwordValid === false
                  ? "영문, 숫자, 특수기호(!,@,#,$,%) 모두 포함하여 8~15자리"
                  : null
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  value={remember}
                  onChange={() => setRemember(!remember)}
                  color="primary"
                />
              }
              label="아이디 저장"
            />

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ mt: 2, mb: 2 }}
            >
              LOG IN
            </Button>

            <div
              style={{ display: "flex", gap: 10 }}
              onClick={() => navigate("/signup")}
            >
              <Link sx={{ cursor: "pointer" }}>회원가입</Link>
            </div>
          </Box>
        </div>
      </div.sign>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        hideBackdrop
      >
        <DialogTitle>로그인 실패</DialogTitle>
        <DialogContent>{dialogText}</DialogContent>

        <Button onClick={() => setOpenDialog(false)}>확인</Button>
      </Dialog>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,

  sign: styled.div`
    width: 500px;
    border-radius: 5px;
    overflow: hidden;
    border: ${(p) => `1px ${p.theme.colors.border} solid;`};

    .head {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 125px;
      background-color: ${(p) => p.theme.colors.primary.main};
    }
    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 20px 35px;
    }
  `,
};

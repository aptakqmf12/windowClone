import React, { useState } from "react";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FilledInput,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { MypageInfoResponse, getMypageInfo } from "@api/mypage";
import styled from "styled-components";
import { SelectChangeEventType } from "@mui/base";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PopUpWrap from "@components/common/popup";
import { changePassword, updateMypageInfo } from "@api/mypage";
import LabelComponent from "@components/common/labelComponent";

export default function MypageEdit({
  setTab,
}: {
  setTab: (v: "view" | "edit") => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [team, setTeam] = useState("");
  const [newPass, setNewPass] = useState("");
  const [oldPass, setOldPass] = useState("");

  const onChangePassword = () => {
    changePassword({ newPass, oldPass });
  };

  const onSubmit = () => {
    updateMypageInfo({ name: "" });
    setTab("view");
  };

  return (
    <>
      <div.wrap>
        <div.between>
          <Typography>민정건설</Typography>
          <Typography>김민정</Typography>
        </div.between>

        <LabelComponent
          label="민정건설"
          value={<Typography>김민정</Typography>}
        />
        <LabelComponent
          label="연락처"
          value={<TextField fullWidth variant="standard" />}
        />

        <div.info>
          <Typography className="label">연락처</Typography>
          <TextField fullWidth variant="standard" />
        </div.info>

        <div.info>
          <Typography className="label">소속</Typography>

          <FormControl fullWidth variant="standard">
            <Select
              value={team}
              onChange={(e: SelectChangeEvent) =>
                setTeam(e.target.value as string)
              }
            >
              <MenuItem value={"기술연구소1"} onClick={() => {}}>
                기술연구소1
              </MenuItem>
              <MenuItem value={"기술연구소2"} onClick={() => {}}>
                기술연구소2
              </MenuItem>
            </Select>
          </FormControl>
        </div.info>

        <div.info>
          <Typography className="label">이메일</Typography>
          <TextField fullWidth variant="standard" />
        </div.info>

        <div.info>
          <Typography className="label">기존 패스워드</Typography>

          <FormControl fullWidth>
            <Input
              type={showPassword ? "text" : "password"}
              value={oldPass}
              onChange={(e) => {
                setOldPass(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e: any) => e.preventDefault()}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div.info>

        <div.info>
          <Typography className="label">신규 패스워드</Typography>

          <FormControl fullWidth>
            <Input
              type={showPassword ? "text" : "password"}
              value={newPass}
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e: any) => e.preventDefault()}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div.info>

        <Button variant="contained" onClick={onChangePassword}>
          비밀번호 체크
        </Button>
        <Button variant="contained" onClick={onSubmit}>
          완료
        </Button>
        <Button variant="contained" onClick={() => setOpenModal(true)}>
          모달
        </Button>
      </div.wrap>

      {openModal && (
        <PopUpWrap>
          <div.modal>
            <WarningAmberRoundedIcon
              sx={{ width: 30, height: 30 }}
              color="warning"
            />
            <div>비밀번호가 일치하지 않습니다.</div>
            <Button
              variant="contained"
              color="warning"
              onClick={() => setOpenModal(false)}
            >
              확인
            </Button>
          </div.modal>
        </PopUpWrap>
      )}
    </>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  `,
  info: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding-right: 10px;

    .label {
      min-width: 120px;
    }
  `,
  between: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${(p) => p.theme.colors.primary.main};
  `,
  modal: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px;
  `,
};

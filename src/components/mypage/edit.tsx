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
import AlertCustom, { AlertCustomType } from "@components/common/alert";
import { changePassword, updateMypageInfo } from "@api/mypage";
import LabelComponent from "@components/common/labelComponent";
import SelectCustom from "@components/common/SelectForm";
import PasswordInput from "@components/common/passwordInput";

export default function MypageEdit({
  setTab,
}: {
  setTab: (v: "view" | "edit") => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [newPass, setNewPass] = useState("");
  const [oldPass, setOldPass] = useState("");

  const onChangePassword = () => {
    changePassword({ newPass, oldPass });
  };

  const onSubmit = () => {
    updateMypageInfo({ name: "test" });
    setTab("view");
  };

  return (
    <>
      <div.wrap>
        <div.between>
          <Typography color={"white"}>민정건설</Typography>
          <Typography color={"white"}>김민정(alswjd7711)님</Typography>
        </div.between>

        <LabelComponent
          label="이름"
          value={
            <TextField
              fullWidth
              variant="standard"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          }
        />
        <LabelComponent
          label="아이디"
          value={<Input fullWidth disabled defaultValue={"김민정"} />}
        />

        <LabelComponent
          label="연락처"
          value={<TextField fullWidth variant="standard" />}
        />

        <LabelComponent
          label="소속"
          value={
            <SelectCustom
              fullWidth
              defaultValue="기술연구소1"
              value={team}
              setValue={(e) => setTeam(e)}
              menuList={["기술연구소1", "기술연구소2"]}
            />
          }
        />
        <LabelComponent
          label="이메일"
          value={<TextField fullWidth variant="standard" />}
        />
        <LabelComponent
          label="기존 패스워드"
          value={
            <PasswordInput
              password={oldPass}
              setPassword={(value) => setOldPass(value)}
            />
          }
        />
        <LabelComponent
          label="신규 패스워드"
          value={
            <PasswordInput
              password={newPass}
              setPassword={(value) => setNewPass(value)}
            />
          }
        />
        <Button variant="contained" onClick={onSubmit}>
          완료
        </Button>

        <Button variant="contained" color="info" onClick={onChangePassword}>
          비밀번호 체크
        </Button>

        <Button
          variant="contained"
          color="info"
          onClick={() => setOpenModal(true)}
        >
          모달
        </Button>
      </div.wrap>

      {openModal && (
        <AlertCustom
          type={AlertCustomType.WARNING}
          color="warning"
          onClose={() => setOpenModal(false)}
        >
          <div>
            <Typography fontSize={14}>비밀번호가 일치하지 않습니다.</Typography>
          </div>
        </AlertCustom>
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
    padding: 4px 8px;
    background-color: ${(p) => p.theme.colors.primary.main};
    border-radius: 4px;
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

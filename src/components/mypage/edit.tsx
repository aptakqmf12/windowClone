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
import { updateMypageInfo } from "@api/mypage";
import LabelComponent from "@components/common/labelComponent";
import SelectCustom from "@components/common/SelectForm";
import PasswordInput from "@components/common/passwordInput";

export default function MypageEdit({
  setTab,
  mypageInfo,
}: {
  setTab: (v: "view" | "edit") => void;
  mypageInfo: MypageInfoResponse;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [newPass, setNewPass] = useState("");
  const [oldPass, setOldPass] = useState("");

  const onSubmit = () => {
    updateMypageInfo({});
    setTab("view");
  };

  const { companyCode, deptName, email, phone, userTypeName } = mypageInfo;

  return (
    <>
      <div.wrap>
        <div>
          <div>
            <Avatar sx={{ width: 145, height: 145 }} />
          </div>

          <div>
            <Typography fontSize={20} fontWeight={600}>
              {userTypeName}
            </Typography>
          </div>
        </div>

        <div.between>
          <Typography color={"white"}>{companyCode}</Typography>
          <Typography color={"white"}>???({email})님</Typography>
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
          value={<Input fullWidth disabled defaultValue={""} />}
        />

        <LabelComponent
          label="연락처"
          value={<TextField value={phone} fullWidth variant="standard" />}
        />

        <LabelComponent
          label="소속"
          value={
            <SelectCustom
              fullWidth
              defaultValue={deptName}
              value={team}
              setValue={(e) => setTeam(e)}
              menuList={[deptName]}
            />
          }
        />
        <LabelComponent
          label="이메일"
          value={<TextField value={email} fullWidth variant="standard" />}
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

        <Button variant="contained" color="info" onClick={() => {}}>
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
    max-width: 800px;
    margin: 0 auto;
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

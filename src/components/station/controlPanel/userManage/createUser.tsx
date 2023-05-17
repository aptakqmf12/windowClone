import { useState } from "react";
import SelectCustom from "@components/common/SelectForm";
import LabelComponent from "@components/common/labelComponent";
import { TextField, Button, FormControl, Select, Input } from "@mui/material";
import PasswordInput from "@components/common/passwordInput";

export default function CreateUser() {
  const [team, setTeam] = useState("");
  const [dept, setDept] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div>
      <LabelComponent
        label="아이디"
        value={
          <>
            <Input /> <Button variant="contained">중복확인</Button>
          </>
        }
      />

      <LabelComponent
        label="사용자명"
        value={
          <>
            <Input />
          </>
        }
      />

      <LabelComponent
        label="연락처"
        value={
          <>
            <Input />
          </>
        }
      />

      <LabelComponent
        label="비밀번호"
        value={
          <>
            <PasswordInput password={password} setPassword={setPassword} />
          </>
        }
      />

      <LabelComponent
        label="비밀번호 확인"
        value={
          <>
            <PasswordInput
              password={confirmPassword}
              setPassword={setConfirmPassword}
            />
          </>
        }
      />

      <LabelComponent
        label="소속회사"
        value={
          <>
            <SelectCustom
              value={team}
              defaultValue={"민정건설"}
              setValue={setTeam}
              menuList={["민정건설", "태완건설"]}
            />
          </>
        }
      />

      <LabelComponent
        label="담당부서"
        value={
          <>
            <SelectCustom
              value={dept}
              defaultValue={"기술연구소"}
              setValue={setDept}
              menuList={["기술연구소", "프로젝트1팀"]}
            />
          </>
        }
      />

      <Button variant="contained">사용자 계정 생성</Button>
    </div>
  );
}

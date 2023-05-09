import { ChangeEvent, useState, useEffect } from "react";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { generatePhoneNumber } from "@lib/inputRule";
import { useLocation } from "react-router-dom";
import { requestCreateAccount } from "@api/userManage";

enum AuthType {
  SITE_USER = "SITE_USER",
  WORKER = "WORKER",
}

export default function RequestCreateAccount() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const uuid = searchParams.get("uuid") || "";
  const nonce = searchParams.get("nonce") || "";

  const [auth, setAuth] = useState<AuthType | undefined>();
  // input 값
  const [companyCode, setCompanyCode] = useState("");
  const [contents, setContents] = useState("");
  const [deptCode, setDeptCode] = useState("");
  const [email, setEmail] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [gender, setGender] = useState<string>("M" || "W");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [loginId, setLoginId] = useState("");
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [siteId, setSiteId] = useState("");
  const [userType, setUserType] = useState("");
  const [workType, setWorkType] = useState("");
  const [phoneNum, setPhoneNum] = useState<string>("");

  useEffect(() => {
    requestCreateAccount({ uuid, nonce }).then((res) => {
      setAuth(res.data.auth as AuthType);
    });
  }, []);

  const handleChange = (e: ChangeEvent<any>) => {
    const generatedNum = generatePhoneNumber(e.target.value);
    setPhoneNum(generatedNum);
  };

  const onGenderChange = (e: SelectChangeEvent) => {
    setGender(e.target.value as string);
  };

  if (auth === undefined) return <></>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 300,
        padding: 30,
        gap: 10,
      }}
    >
      <div>현재 auth : {auth}</div>

      <TextField label="비고" />
      <TextField label="부서코드" />
      <TextField label="이메일" />
      <TextField label="사용 여부" />
      <TextField label="로그인 ID" />
      <TextField label="이름" />
      <TextField label="로그인 PW" />
      <TextField
        margin="normal"
        label="핸드폰 번호"
        variant="outlined"
        fullWidth
        value={phoneNum}
        onChange={handleChange}
        placeholder="000-0000-0000"
        inputProps={{ maxLength: 13, pattern: "\\d{3}-\\d{3,4}-\\d{4}" }}
      />

      {auth === "SITE_USER" && (
        <>
          <TextField label="회사코드" />
          <TextField label="사이트 ID" />
          <TextField label="사용자 타입" />
        </>
      )}

      {auth === "WORKER" && (
        <>
          <TextField label="만료날짜" />
          {/* 성별 */}
          <Select
            value={gender}
            defaultValue="none"
            onChange={onGenderChange}
            sx={{
              width: 300,
              border: "1px white solid",
              color: "black",
              ".MuiSelect-icon": { color: "black" },
            }}
            size="small"
            placeholder="성별"
          >
            <MenuItem value={"M"}>남자</MenuItem>
            <MenuItem value={"W"}>여자</MenuItem>
          </Select>
          <TextField label="직종" />
          <TextField label="작업 구분" />
        </>
      )}
    </div>
  );
}

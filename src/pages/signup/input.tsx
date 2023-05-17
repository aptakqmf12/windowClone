import { useEffect, useState } from "react";
import { Typography, TextField } from "@mui/material";
import styled from "styled-components";
import { passwordRule } from "@lib/inputRule";

export default function SignUpInput() {

  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [telNo, setTelNo] = useState('');
  const [name, setName] = useState('');

  const [isValidPwd, setValidPwd] = useState(true);
  const [isValidPwdCheck, setValidPwdCheck] = useState(true);

  useEffect(() => {
    if(password == '') return;

    setValidPwd(passwordRule(password));
    
    setValidPwdCheck(false);
  }, [password])
  
  useEffect(() => {
    if(pwdCheck == '') return;

    setValidPwdCheck(password === pwdCheck);
  }, [pwdCheck])

  return (
    <div>
      <div>
        <Typography fontSize={18}>회원 정보 입력</Typography>
      </div>
      <div.field><TextField label="계정 생성 코드" value={code} onChange={e => setCode(e.target.value)} variant="outlined" fullWidth /></div.field>
      <div.field><TextField label="이메일" value={email} onChange={e => setEmail(e.target.value)} variant="outlined" fullWidth /></div.field>
      <div.field><TextField label="비밀번호" value={password} onChange={e => setPassword(e.target.value)} error={!isValidPwd} variant="outlined" type="password" autoComplete="current-password" helperText="영문, 숫자, 특수기호(!,@,#,$,%) 모두 포함하여 8~15자리" fullWidth /></div.field>
      <div.field><TextField label="비밀번호 확인" value={pwdCheck} onChange={e => setPwdCheck(e.target.value)} error={!isValidPwdCheck} variant="outlined" type="password" autoComplete="current-password" fullWidth /></div.field>
      <div.field><TextField label="전화번호" value={telNo} onChange={e => setTelNo(e.target.value)} variant="outlined" fullWidth /></div.field>
      <div.field><TextField label="이름" value={name} onChange={e => setName(e.target.value)} variant="outlined" helperText="실명을 입력해주세요" fullWidth /></div.field>
    </div>
  );
}

const div = {
  wrap: styled.div``,
  field: styled.div`
    margin-bottom: 10px;
  `
};

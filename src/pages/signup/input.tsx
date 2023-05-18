import { useEffect, useState } from "react";
import { Typography, TextField } from "@mui/material";
import styled from "styled-components";
import { passwordRule } from "@lib/inputRule";
import { SignUpInputProps } from ".";

interface SignUpInputFunc extends SignUpInputProps {
  setPwd: Function
}
export default function SignUpInput(props : SignUpInputFunc) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [telNo, setTelNo] = useState(props.phone);
  const [name, setName] = useState(props.name);
  const [agree, setAgree] = useState(props.agree);

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

  useEffect(() => {
    if(isValidPwd && isValidPwdCheck)
      props.setPwd(password);
  }, [password, pwdCheck]);

  return (
    <div>
      <div>
        <Typography fontSize={18}>회원 정보 입력</Typography>
      </div>
      <div.field><TextField label="이메일" value={email} variant="outlined" fullWidth required disabled /></div.field>
      <div.field><TextField label="비밀번호" value={password} onChange={e => setPassword(e.target.value)} error={!isValidPwd} variant="outlined" type="password" autoComplete="current-password" helperText="영문, 숫자, 특수기호(!,@,#,$,%) 모두 포함하여 8~15자리" fullWidth required /></div.field>
      <div.field><TextField label="비밀번호 확인" value={pwdCheck} onChange={e => setPwdCheck(e.target.value)} error={!isValidPwdCheck} variant="outlined" type="password" autoComplete="current-password" fullWidth required /></div.field>
      <div.field><TextField label="이름" value={name} variant="outlined" helperText="실명을 입력해주세요" fullWidth required disabled /></div.field>
      <div.field><TextField label="연락처" value={telNo} variant="outlined" fullWidth required disabled /></div.field>
    </div>
  );
}

const div = {
  wrap: styled.div``,
  field: styled.div`
    margin-bottom: 10px;
  `
};

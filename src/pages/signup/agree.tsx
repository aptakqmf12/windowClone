import { useEffect, useState } from "react";
import { FormControlLabel, Checkbox, Typography, Button } from "@mui/material";
import styled from "styled-components";
import LabelComponent from "@components/common/labelComponent";

interface SignUpAgreeType {
  setAgree: Function
}
export default function SignUpAgree(props: SignUpAgreeType) {
  const [all, setAll] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);

  const setAllFunc = () => {
    if(all) {
      setAll(false);
      setAgree1(false);
      setAgree2(false);
      setAgree3(false);
    } else {
      setAll(true);
      setAgree1(true);
      setAgree2(true);
      setAgree3(true);
    }
  }

  useEffect(() => {
    props.setAgree({"TOU": agree1, "PIA": agree2, "POPI": agree3})
  }, [agree1, agree2, agree3]);

  return (
    <div.wrap>
      <div>
        <Checkbox checked={all} onChange={() => setAllFunc()} />전체 동의
      </div>

      <div.between>
        <FormControlLabel label="리스크제로 이용약관 동의 (필수)" control={<Checkbox checked={agree1} onChange={() => setAgree1(!agree1)} />} />
        <Typography>상세보기 &gt;</Typography>
      </div.between>

      <div.between>
        <FormControlLabel label="개인정보 수집이용 동의 (필수)" control={<Checkbox checked={agree2} onChange={() => setAgree2(!agree2)} />} />
        <Typography>상세보기 &gt;</Typography>
      </div.between>

      <div.between>
        <FormControlLabel label="개인정보 제3자 제공 동의 (선택)" control={<Checkbox checked={agree3} onChange={() => setAgree3(!agree3)} />} />
        <Typography>상세보기 &gt;</Typography>
      </div.between>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  between: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

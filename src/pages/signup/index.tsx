import { useState, useEffect, useRef, ChangeEvent } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { Person, Edit, Check } from "@mui/icons-material";

import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginStore } from "@store/login";

import LogoIcon from "@components/icons/logo";
import SignUpAgree from "./agree";
import SignUpInput from "./input";
import SignUpComplete from "./complete";
import { CheckCreateAccount, ReqCreateAccountRegiPwd } from "@api/sign";

export interface SignUpInputProps {
  agree: {},
  companyCode: string,
  toId: string,
  loginId: string,
  occupation: string,
  gender: string,
  auth: string,
  uuid: string,
  nonce: string,
  createdAt: string,
  phone: string,
  contents: string,
  createId: string,
  name: string,
  workType: string,
  siteId: string,
  expireDate: string,
  id: string,
  userType: string,
  isExpired: "t" | "f",
  email: string,
  deptCode: string
}

interface AgreeType {
  TOU:boolean, PIA:boolean, POPI:boolean
}

export default function SignUp() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const uuid = searchParams.get('uuid');
  const nonce = searchParams.get('nonce');

  const [userInfo, setUserInfo] = useState<SignUpInputProps>();

  const [ isBlock, setBlock ] = useState(true);
  const [ agree, setAgree ] = useState<AgreeType>({TOU:false, PIA:false, POPI:false});
  const navigate = useNavigate();

  const [password, setPassword] = useState('');

  const [currentStep, setCurrentStep] = useState(0);
  const MAX_STEP = 3;

  const FIXED_STEPS = [
    {
      step: 0,
      title: "약관동의",
      component: <SignUpAgree setAgree={setAgree} />,
      icon: <Person />,
    },
    {
      step: 1,
      title: "정보입력",
      component: <SignUpInput {...userInfo!} setPwd={setPassword} />,
      icon: <Edit />,
    }
  ];

  const handleNext = () => {
    if(!agree.TOU || !agree.PIA) {
      alert('필수 약관에 동의해주세요.');
      return;
    }

    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handleRegiPwd = () => {
    ReqCreateAccountRegiPwd({uuid, nonce, password}).then((res) => {
      const success = res.success;
      if(success) {
        alert('가입이 완료되었습니다.\n로그인 페이지로 이동합니다.');
        navigate('/signin');
      }
    }).catch((err) =>{
      alert('서버에서 오류가 발생하였습니다.');
    });
  };

  useEffect(() => {
    // http://127.0.0.1:5173/signup?uuid=7d7449a2-4d5d-4413-b033-cc05e78a9b52&nonce=tb1QiQIaOcoFDPiBXk48d3nXoTZFUo
    if(!uuid || !nonce) {
      alert('유효한 경로로 접근하세요.');
      navigate(-1);
      return;
    }

    CheckCreateAccount({uuid, nonce}).then((res) => {
      const data = res.data;
      if(data.isExpired == 't') {
        alert('해당 요청은 만료되었습니다.');
        navigate(-1);
        return;
      }

      if(data.isComplete == 't') {
        alert('해당 요청은 만료되었습니다.');
        navigate(-1);
        return;
      }

      setUserInfo(data);
      
      setBlock(false);
    });
    
  }, []);

  if(!isBlock) {
    return (
      <div.wrap>
        <div.sign>
          <div className="head">
            <LogoIcon fill="#ffffff" width={250} />
          </div>

          <div className="body">
            <Typography fontSize={18}>본인인증</Typography>

            <Stepper
              activeStep={currentStep}
              alternativeLabel
              sx={{ width: "100%" }}
            >
              {FIXED_STEPS.map((step, i) => (
                <Step key={i}>
                  <StepLabel>{step.title}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <div style={{ marginTop: 150 }}>
              {FIXED_STEPS.find((step) => step.step === currentStep)?.component}
            </div>

            <div style={{ marginTop: 50 }}>
              {currentStep === 0 && (
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={currentStep === MAX_STEP - 1}
                  >
                    다음
                  </Button>
                </div>
              )}

              {currentStep === 1 && (
                <div>
                  <Button
                    variant="contained"
                    onClick={handleRegiPwd}
                    disabled={currentStep === MAX_STEP - 1}
                  >
                    확인
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div.sign>
      </div.wrap>
    );
  }
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
    border: 1px #dfdfdf solid;

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

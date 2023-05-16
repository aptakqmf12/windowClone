import { useState, useEffect, useRef, ChangeEvent } from "react";
import {
  Stepper,
  Step,
  StepLabel,
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
import { Person, Edit, Check } from "@mui/icons-material";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "@store/login";

import LogoIcon from "@components/icons/logo";
import SignUpAgree from "./agree";
import SignUpInput from "./input";
import SignUpComplete from "./complete";

export default function SignUp() {
  const { isLogin, setLogin } = useLoginStore();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const MAX_STEP = 3;

  const FIXED_STEPS = [
    {
      step: 0,
      title: "약관동의",
      component: <SignUpAgree />,
      icon: <Person />,
    },
    {
      step: 1,
      title: "정보입력",
      component: <SignUpInput />,
      icon: <Edit />,
    },
    {
      step: 2,
      title: "가입완료",
      component: <SignUpComplete />,
      icon: <Check />,
    },
  ];

  const handleNext = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };
  const handleSignUp = () => {
    alert("회원가입 완료");
    navigate("/signin");
  };

  return (
    <div.wrap>
      <div.sign>
        <div className="head">
          <LogoIcon fill="#ffffff" width={250} />
        </div>

        <div className="body">
          <Typography fontSize={18}>회원가입</Typography>

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
            {currentStep !== 2 && (
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

            {currentStep === 2 && (
              <div>
                <Button
                  variant="contained"
                  onClick={handleSignUp}
                  disabled={currentStep !== MAX_STEP - 1}
                >
                  로그인
                </Button>
              </div>
            )}
          </div>
        </div>
      </div.sign>
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

import React, { useState } from "react";
import styled from "styled-components";
import { WarningAmber, WarningAmberOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
export enum AlertCustomType {
  WARNING,
  CLEAR,
}

interface AlertCustomProps {
  children: React.ReactNode;
  type: AlertCustomType;
  onClose: () => void;
  color?: "warning" | "primary" | "secondary" | "error" | "info" | "success";
  width?: number;
  height?: number;
}

export default function AlertCustom({
  children,
  width = 250,
  height = 200,
  color = "primary",
  onClose,
}: AlertCustomProps) {
  const iconSx = { width: 50, height: 50 };

  return (
    <div.wrap style={{ width, height }}>
      <div.body>
        <WarningAmber sx={iconSx} color={color} />

        <div className="content">{children}</div>

        <Button variant="contained" color={color} onClick={onClose}>
          확인
        </Button>
      </div.body>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    background-color: white;
  `,

  body: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px;

    .content {
      margin: 10px 0;
    }
  `,
};

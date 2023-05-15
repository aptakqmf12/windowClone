import { FormControl, Select, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface LabelComponentProps {
  label: string;
  value: React.ReactNode;
  labelWidth?: number;
}

export default function LabelComponent({
  label,
  value,
  labelWidth,
}: LabelComponentProps) {
  return (
    <div.info>
      <Typography
        sx={{ width: labelWidth || 120 }}
        color={"primary.main"}
        fontWeight={600}
      >
        {label}
      </Typography>

      <div className="value">{value}</div>
    </div.info>
  );
}

const div = {
  info: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding-right: 10px;

    .value {
      width: calc(100% - 120px);
    }
  `,
};

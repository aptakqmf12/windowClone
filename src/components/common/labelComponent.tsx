import { FormControl, Select, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface LabelComponentProps {
  label: string;
  value: React.ReactNode;
  labelWidth?: number;
  direction?: "row" | "column";
}

export default function LabelComponent({
  label,
  value,
  labelWidth,
  direction = "row",
}: LabelComponentProps) {
  return (
    <div.info direction={direction}>
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
  info: styled.div<{ direction: "row" | "column" }>`
    display: flex;
    flex-direction: ${(p) => p.direction};
    align-items: ${(p) => (p.direction === "row" ? "center" : "flex-start")};
    gap: ${(p) => (p.direction === "row" ? "10px" : "0px")};
    width: 100%;
    padding-right: 10px;

    .value {
      width: calc(100% - 120px);
    }
  `,
};

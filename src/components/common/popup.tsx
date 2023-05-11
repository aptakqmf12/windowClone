import React, { useState } from "react";
import styled from "styled-components";

interface PopUpWrapProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

export default function PopUpWrap({
  children,
  width = 200,
  height = 200,
}: PopUpWrapProps) {
  return <div.wrap style={{ width, height }}>{children}</div.wrap>;
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
};

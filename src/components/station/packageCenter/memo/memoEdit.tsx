import { useState } from "react";
import {
  Button,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import styled from "styled-components";
import LabelComponent from "@components/common/labelComponent";

export default function MemoEdit({
  setTab,
}: {
  setTab: (v: "list" | "edit") => void;
}) {
  return (
    <div>
      <Typography fontSize={20} fontWeight={600}>
        MEMO
      </Typography>
      <div.wrap>
        <LabelComponent
          label={"제목"}
          value={
            <>
              <TextField
                required
                name="title"
                placeholder="제목"
                size="small"
                fullWidth
              />
            </>
          }
        />
        <LabelComponent label={"작성자"} value={<></>} />
        <LabelComponent label={"작성일"} value={<></>} />
        <LabelComponent
          label={"내용"}
          value={
            <>
              <TextField
                name="content"
                placeholder="내용"
                multiline
                fullWidth
              />
            </>
          }
        />
      </div.wrap>
    </div>
  );
}
const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    width: 80%;
    margin: 5% auto;

    .wrap {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 20px;
    }
  `,
  info: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding-right: 10px;

    .label {
      min-width: 120px;
      border-right: 1px black solid;
    }
  `,
  between: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
  modal: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10px;
  `,
  buttons: styled.div`
    display: flex;
    width: 100%;
    margin-top: 2%;
    justify-content: center;
    gap: 2%;
  `,
};

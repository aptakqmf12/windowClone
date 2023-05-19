import { useState } from "react";
import {
  Box,
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
import { MemoInfo, saveSiteMemoInfo } from "@api/siteMemo";

export default function MemoAdd({
  setTab,
}: {
  setTab: (v: "list" | "edit" | "add") => void;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveSiteMemoInfo({
      title: title,
      content: content,
      userId: "",
      createDate: "",
      useYn: "Y",
      saveType: "I",
    })
      .then((res) => {
        setTab("list");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div.wrap>
        <div.between>
          <Typography fontSize={20} fontWeight={600}>
            MEMO
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              setTab("list");
            }}
          >
            목록
          </Button>
        </div.between>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className="wrap"
        >
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
          <div.buttons>
            <Button variant="contained" type="submit" onClick={() => {}}>
              등록
            </Button>
          </div.buttons>
        </Box>
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

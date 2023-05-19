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

export default function MemoEdit({
  setTab,
  memoInfoProps,
}: {
  setTab: (v: "list" | "edit" | "add") => void;
  memoInfoProps: MemoInfo;
}) {
  const [memoInfo, setMemoInfo] = useState<MemoInfo>(memoInfoProps);
  const [saveType, setSaveType] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    saveSiteMemoInfo({
      title: memoInfo.title,
      content: memoInfo.content,
      useYn: "Y",
      saveType: saveType,
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
                  value={memoInfo.title}
                />
              </>
            }
          />
          <LabelComponent label={"작성자"} value={<>{memoInfo.userId}</>} />
          <LabelComponent label={"작성일"} value={<>{memoInfo.createDate}</>} />
          <LabelComponent
            label={"내용"}
            value={
              <>
                <TextField
                  name="content"
                  placeholder="내용"
                  multiline
                  fullWidth
                  value={memoInfo.content}
                />
              </>
            }
          />
          <div.buttons>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                setSaveType("U");
              }}
            >
              수정
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                setSaveType("D");
              }}
            >
              삭제
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

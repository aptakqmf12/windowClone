import { LibraryType } from "@api/libraryRoom";
import LabelComponent from "@components/common/labelComponent";
import { useState, useEffect } from "react";
import {
  Button,
  Input,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

interface LibraryRoomDetailProps {
  data: LibraryType;
  goBack: () => void;
}

export default function LibraryRoomDetail({
  data,
  goBack,
}: LibraryRoomDetailProps) {
  const {
    companyCode,
    content,
    createId,
    createdAt,
    fileId,
    saveType,
    siteDataId,
    siteId,
    title,
    updateId,
    updatedAt,
    useYn,
  } = data;

  const [category, setCategory] = useState("");
  const [name, setname] = useState("");

  const save = () => {};
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <LabelComponent
          label={"구분"}
          value={<Input fullWidth />}
          direction="column"
        />

        <LabelComponent
          label={"등록자 정보"}
          value={
            <div style={{ display: "flex", gap: 10 }}>
              <TextField value={companyCode} variant="outlined" size="small" />
              <TextField value={title} variant="outlined" size="small" />
              <TextField value={title} variant="outlined" size="small" />
            </div>
          }
          direction="column"
        />
      </div>

      <LabelComponent
        label={"자료명"}
        value={<Input value={title} fullWidth />}
        direction="column"
      />
      <LabelComponent
        label={"내용"}
        value={
          <TextareaAutosize
            value={content}
            minRows={5}
            style={{ width: "100%" }}
            placeholder="Minimum 3 rows"
          />
        }
        direction="column"
      />

      <LabelComponent
        label={"첨부 파일"}
        value={
          <div>
            <Typography>동절기 대비 ...hwp</Typography>
          </div>
        }
        direction="column"
      />

      <Button variant="contained" color="info" onClick={goBack}>
        목록
      </Button>
      <Button variant="contained" onClick={save}>
        수정
      </Button>
    </div>
  );
}

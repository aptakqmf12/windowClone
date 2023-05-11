import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
  Button,
  InputLabel,
  IconButton,
  Paper,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import styled from "styled-components";
import { ViewType } from "./partnerList";

export default function PartnerDetail({
  setView,
}: {
  setView: (ViewType: ViewType) => void;
}) {
  const [construction, setConstruction] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setConstruction(event.target.value as string);
  };
  return (
    <div>
      <div.between>
        <Typography fontSize={20} fontWeight={600}>
          협력사 세부사항
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setView(ViewType.LIST);
          }}
        >
          목록
        </Button>
      </div.between>
      <div.wrap>
        <div.info>
          <Typography className="label">업체명</Typography>
          <TextField
            required
            id="partnerName"
            placeholder="업체명"
            size="small"
          />

          <Typography className="label">대표 아이디</Typography>
          <TextField id="partnerId" placeholder="대표 아이디" size="small" />
        </div.info>
        <div.info>
          <Typography className="label">사업자 등록번호</Typography>
          <TextField
            id="partnerLicense"
            placeholder="사업자 등록번호"
            size="small"
          />
          <Typography className="label"> 투입공종</Typography>
          <Select
            id="construction"
            value={construction}
            label="construction"
            onChange={handleChange}
            placeholder="투입공종"
            size="small"
          >
            <MenuItem value={"터파기 공사"}>터파기 공사</MenuItem>
            <MenuItem value={"전기 공사"}>전기 공사</MenuItem>
            <MenuItem value={"터널 공사"}>터널 공사</MenuItem>
          </Select>
        </div.info>
        <div.info>
          <Typography className="label">대표자명</Typography>
          <TextField id="CEOName" placeholder="대표자명" size="small" />
          <Typography className="label">등록일</Typography>
          <Typography></Typography>
        </div.info>
        <div.info>
          <Typography className="label">연락처</Typography>
          <TextField id="phone" placeholder="연락처" size="small" />
        </div.info>
        <div.buttons>
          <Button variant="contained" onClick={() => {}}>
            수정
          </Button>
          <Button variant="contained" onClick={() => {}}>
            삭제
          </Button>
        </div.buttons>
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
    .MuiInputBase-root {
      margin: 0;
      min-width: 150px;
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
    justify-content: center;
    gap: 2%;
  `,
};

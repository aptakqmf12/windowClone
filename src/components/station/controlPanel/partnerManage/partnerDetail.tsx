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
import SelectForm from "@components/common/SelectForm";
import LabelComponent from "@components/common/labelComponent";
import { PartnerInfo } from "./partnerList";
import { ViewType } from "./partnerList";
import { savePartnerInfo } from "@api/sitePartners";
export default function PartnerDetail({
  setView,
  partnerInfo,
}: {
  setView: (ViewType: ViewType) => void;
  partnerInfo: PartnerInfo;
}) {
  const [openModal, setOpenModal] = useState(false);

  const [partnerName, setPartnerName] = useState(partnerInfo.partnerName);
  const [partnerLicense, setPartnerLicense] = useState(
    partnerInfo.partnerLicense
  );

  const [construction, setConstruction] = useState(
    partnerInfo.constructionName
  );

  const [saveType, setSaveType] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    savePartnerInfo({
      partnerId: partnerInfo.partnerId,
      partnerName: partnerName,
      partnerLicense: partnerLicense,
      useYN: "Y",
      saveType: saveType,
    })
      .then((res) => {})
      .catch((error) => {});
  };

  const handleChange = (event: SelectChangeEvent) => {
    setConstruction(event.target.value as string);
  };

  return (
    <div>
      <div.wrap>
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
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className="wrap"
        >
          <div.info>
            <LabelComponent
              label="업체명"
              value={
                <>
                  <TextField
                    required
                    name="partnerName"
                    placeholder="업체명"
                    size="small"
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                  />
                </>
              }
            />
            <LabelComponent
              label="대표 아이디"
              value={
                <>
                  <TextField
                    required
                    name="partnerId"
                    placeholder="대표 아이디"
                    size="small"
                    value={partnerInfo.partnerId}
                  />
                </>
              }
            />
          </div.info>
          <div.info>
            <LabelComponent
              label="사업자 등록번호"
              value={
                <>
                  <TextField
                    required
                    name="partnerLicense"
                    placeholder="사업자 등록번호"
                    size="small"
                    value={partnerLicense}
                    onChange={(e) => setPartnerLicense(e.target.value)}
                  />
                </>
              }
            />
            <LabelComponent
              label="투입공종"
              value={
                <>
                  <SelectForm
                    value={construction}
                    defaultValue={"터파기 공사"}
                    setValue={setConstruction}
                    menuList={["터파기 공사", "전기 공사", "터널 공사"]}
                  />
                </>
              }
            />
          </div.info>
          <div.info>
            <LabelComponent
              label="대표자명"
              value={
                <>
                  <TextField
                    required
                    name="CEOName"
                    placeholder="대표자명"
                    size="small"
                    value={partnerInfo.CEOName}
                  />
                </>
              }
            />
            <LabelComponent
              label="등록일"
              value={
                <>
                  <TextField
                    placeholder="등록일"
                    size="small"
                    value={partnerInfo.createDate}
                  />
                </>
              }
            />
          </div.info>
          <div.info>
            <LabelComponent
              label="연락처"
              value={
                <>
                  <TextField
                    required
                    name="phone"
                    placeholder="연락처"
                    size="small"
                    value={partnerInfo.phone}
                  />
                </>
              }
            />
          </div.info>
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
    width: 70%;
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

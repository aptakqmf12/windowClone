import {
  Box,
  Button,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";

import SelectCustom from "@components/common/SelectForm";
import LabelComponent from "@components/common/labelComponent";

import { savePartnerInfo } from "@api/sitePartners";
import { ViewType } from "./partnerList";
import AlertCustom, { AlertCustomType } from "@components/common/alert";

export default function PartnerCreate({
  setView,
}: {
  setView: (ViewType: ViewType) => void;
}) {
  const [openModal, setOpenModal] = useState(false);

  const [partnerName, setPartnerName] = useState("");
  const [partnerLicense, setPartnerLicense] = useState("");

  const [construction, setConstruction] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    savePartnerInfo({
      partnerName: partnerName,
      partnerLicense: partnerLicense,
      useYn: "Y",
      saveType: "I",
    })
      .then((res) => {
        setView(ViewType.LIST);
      })
      .catch((error) => {});
  };

  const handleChange = (event: SelectChangeEvent) => {
    setConstruction(event.target.value as string);
  };
  const today = dayjs().format("YYYY-MM-DD");

  return (
    <div>
      <div.wrap>
        <div.between>
          <Typography fontSize={20} fontWeight={600}>
            협력사 등록
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
                  <SelectCustom
                    value={construction}
                    defaultValue={""}
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
                  />
                </>
              }
            />
            <LabelComponent
              label="등록일"
              value={
                <>
                  <TextField
                    required
                    name="createDate"
                    size="small"
                    InputProps={{
                      readOnly: true,
                    }}
                    value={today}
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
                  />
                </>
              }
            />
          </div.info>
          <div.buttons>
            <Button
              variant="contained"
              type="submit"
              onClick={() => setOpenModal(true)}
            >
              등록
            </Button>
          </div.buttons>
        </Box>
      </div.wrap>
      {openModal && (
        <AlertCustom
          type={AlertCustomType.WARNING}
          color="warning"
          onClose={() => setOpenModal(false)}
        >
          <div>
            <Typography fontSize={14}>업체명을 입력해주세요.</Typography>
          </div>
        </AlertCustom>
      )}
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
    margin-top: 2%;
    justify-content: center;
    gap: 2%;
  `,
};

import axios, { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { ResponseStatus } from "../../types";
import { api, dispatchError, generateQueryParamUrl } from "..";
import { PartnerInfo } from "@components/station/controlPanel/partnerManage/partnerList";

interface getPartnerProps {
  name?: string;
  pageIndex?: number;
  pagePerSize?: number;
}

export interface PartnerResponse {
  partnerId: string;
  siteId: string;
  companyCode: string;
  partnerName: string;
  partnerLicense: string;
  useYn: "Y" | "N";
  deletedYn: "Y" | "N";
  createId: string;
  createDate: string;
  updateId: string;
  updateDate: string;
}

export const getPartnerList = async (props: getPartnerProps) => {
  const url = generateQueryParamUrl(
    "/api/v1/site/partners/getSitePartners",
    props
  );

  return await api
    .get(url)
    .then((res: AxiosResponse<ResponseData<PartnerResponse[]>>) => {
      return res.data;
    });
};
interface SavePartnerInfoProps {
  partnerId?: string;
  partnerName: string;
  partnerLicense: string;
  useYN: string;
  saveType: string;
}

export const savePartnerInfo = async (props: SavePartnerInfoProps) => {
  return await api
    .post("/api/v1/site/partners/saveSitePartnersInfo", props)
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};
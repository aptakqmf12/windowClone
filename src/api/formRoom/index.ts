import { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { api, generateQueryParamUrl } from "..";

interface GetSiteFormListProps {
  pageIndex: number;
  pagePerSize?: number;
}

export const getSiteFormList = async (props: GetSiteFormListProps) => {
  const url = generateQueryParamUrl("/api/v1/site/form/getSiteFormList", props);

  return await api.get(url).then((res: AxiosResponse<ResponseData<any>>) => {
    return res.data;
  });
};

interface GetSiteFormInfoProps {
  siteFormId: string;
}

export const getSiteFormInfo = async (props: GetSiteFormInfoProps) => {
  const url = generateQueryParamUrl("/api/v1/form/getSiteFormList", props);

  return await api.get(url).then((res: AxiosResponse<ResponseData<any>>) => {
    return res.data;
  });
};

export const saveSiteForm = async () => {
  return await api
    .post("/api/v1/form/saveSiteForm", undefined)
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

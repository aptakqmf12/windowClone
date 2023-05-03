import axios, { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { ResponseStatus } from "../../types";
import { api, dispatchError, generateQueryParamUrl } from "..";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

interface getSitRoleProps {
  companyCode: string;
  roleName?: string;
  siteId?: string;
  useYn?: "Y" | "N";
}

// api
export const getSitRole = async (props: getSitRoleProps) => {
  const url = generateQueryParamUrl("/api/site/role/getSiteRole", props);

  return await api
    .get(url, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

interface SaveSiteRoleInfoProps {
  companyCode: string;
  roleName?: string;
  siteId?: string;
  useYn?: "Y" | "N";
}

export const saveSiteRoleInfo = async (props: SaveSiteRoleInfoProps) => {
  const body = props;

  return await api
    .post("/api/site/role/saveSiteRoleInfo", { body }, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

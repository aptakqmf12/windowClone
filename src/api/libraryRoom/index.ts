import { AxiosResponse } from "axios";
import { DataResponse, ListResponse, PaginationData } from "../../types";
import { api, generateQueryParamUrl } from "..";

interface LibraryListRequest {
  useYn: "Y" | "N";
  title: string;
}

export interface LibraryType {
  companyCode: string;
  content: string;
  createId: string;
  createdAt: string;
  fileId: string;
  saveType: string;
  siteDataId: string;
  siteId: string;
  title: string;
  updateId: string;
  updatedAt: string;
  useYn: "Y" | "N";
}

export const getLibraryList = async (props: LibraryListRequest) => {
  const url = generateQueryParamUrl("/api/v1/site/data/getSiteDataList", props);

  return await api
    .get(url)
    .then((res: AxiosResponse<ListResponse<PaginationData, LibraryType[]>>) => {
      return res.data;
    });
};

interface LibraryDetailRequest {
  siteDataId: string;
  companyCode?: string;
  siteId?: string;
  formTitle?: string;
  formContent?: string;
  fileId?: string;
  useYn?: "Y" | "N";
}

export const getLibraryDetail = async (props: LibraryDetailRequest) => {
  const url = generateQueryParamUrl("/api/v1/site/data/getSiteDataInfo", props);

  return await api
    .get(url)
    .then((res: AxiosResponse<DataResponse<LibraryType>>) => {
      return res.data;
    });
};

// interface GetSiteFormInfoProps {
//   siteFormId: string;
// }

// export const getSiteFormInfo = async (props: GetSiteFormInfoProps) => {
//   const url = generateQueryParamUrl("/api/v1/form/getSiteFormList", props);

//   return await api
//     .get(url)
//     .then((res: AxiosResponse<ListResponse<any, any>>) => {
//       return res.data;
//     });
// };

// export const saveSiteForm = async () => {
//   return await api
//     .post("/api/v1/form/saveSiteForm", undefined)
//     .then((res: AxiosResponse<ListResponse<any, any>>) => {
//       return res.data;
//     });
// };

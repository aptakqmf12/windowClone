import axios, { AxiosResponse } from "axios";
import { DataResponse, ListResponse } from "../../types";
import { ResponseStatus } from "../../types";
import { api, generateQueryParamUrl } from "..";

interface getSiteOrganizationProps {
  companyCode: string;
  deptName?: string;
  siteId?: string;
  useYn?: "Y" | "N";
}

// api
export const getSiteOrganization = async (props: getSiteOrganizationProps) => {
  const url = generateQueryParamUrl("/api/site/org/getSiteOrganization", props);

  return await api
    .get(url)
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
      return res.data;
    });
};

// FIXME: body로 바꿔야할듯
// interface SaveSiteOrganizationProps {
//   companyCode: string;
//   createDate?: string;
//   createId?: string;
//   deletedYn: string;
//   deptCode?: string;
//   deptName: string;
//   saveType: "I" | "U" | "D";
//   siteId: string;
//   siteOrganizationId?: string;
//   updateDate?: string;
//   updateId?: string;
//   useYn: "Y" | "N";
// }

// export const saveSiteOrganization = async (
//   props: SaveSiteOrganizationProps
// ) => {
//   const url = generateQueryParamUrl(
//     "/api/site/org/saveSiteOrganizationInfo",
//     props
//   );

//   return await api
//     .post(url, { headers })
//     .then((res: AxiosResponse<ListResponse<any, any>>) => {
//       return res.data;
//     });
// };

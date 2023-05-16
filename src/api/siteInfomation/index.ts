import axios, { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { ResponseStatus } from "../../types";
import { api, dispatchError, generateQueryParamUrl } from "..";

// interface getSiteOrganizationProps {
//   companyCode: string;
//   deptName?: string;
//   siteId?: string;
//   useYn?: "Y" | "N";
// }

// // api
// export const getSiteOrganization = async (props: getSiteOrganizationProps) => {
//   const url = generateQueryParamUrl("/api/site/org/getSiteOrganization", props);

//   return await api
//     .get(url)
//     .then((res: AxiosResponse<ResponseData<any>>) => {
//       return res.data;
//     });
// };

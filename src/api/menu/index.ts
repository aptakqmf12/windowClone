import { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { api, generateQueryParamUrl } from "..";

export interface PackageMenuType {
  menuId: string;
  parentMenuId: string;
  subParentMenuId: string;
  menuName: string;
  url: string;
  sortOrder: string;
}

interface PackageMenuListRequest {
  depth: number;
  parentPackageId?: string;
}

export const getPackageMenuList = async (props: PackageMenuListRequest) => {
  const url = generateQueryParamUrl("/api/v1/package/getPackageMenu", props);

  return await api
    .get(url)
    .then((res: AxiosResponse<ResponseData<PackageMenuType[]>>) => {
      return res.data;
    });
};

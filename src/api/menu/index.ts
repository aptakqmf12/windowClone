import { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { api } from "..";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

export interface MenuType {
  menuId: string;
  parentMenuId: string;
  subParentMenuId: string;
  menuName: string;
  url: string;
  sortOrder: string;
}

export const getMenuList = async () => {
  return await api
    .get("/api/menu/getMenuList", { headers })
    .then((res: AxiosResponse<ResponseData<MenuType[]>>) => {
      return res.data;
    });
};

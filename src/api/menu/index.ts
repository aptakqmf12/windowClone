import { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { api } from "..";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

export const getMenuList = async () => {
  return await api
    .get("/menu/getMenuList", { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

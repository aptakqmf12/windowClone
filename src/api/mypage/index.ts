import axios, { AxiosResponse } from "axios";
import { DataResponse, ListResponse } from "../../types";
import { ResponseStatus } from "../../types";
import { api } from "..";

// api
export interface MypageInfoResponse {
  companyCode: string;
  deptName: string;
  email: string;
  id: string;
  imgFileId: string;
  isActive: string;
  phone: string;
  userTypeName: string;
}

export const getMypageInfo = async () => {
  return await api
    .get("/api/v1/myPage/info")
    .then((res: AxiosResponse<ListResponse<MypageInfoResponse, null>>) => {
      return res.data;
    });
};

interface UpdateMypageInfoProps {
  newPass?: string;
  oldPass?: string;
  file?: any;
}

export const updateMypageInfo = async (props: UpdateMypageInfoProps) => {
  return await api
    .post("/api/v1/myPage/updateMyPage", props)
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
      return res.data;
    });
};

import axios, { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { ResponseStatus } from "../../types";
import { api, dispatchError } from "..";

interface ChangePasswordProps {
  newPass: string;
  oldPass: string;
}

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

// api
export const changePassword = async ({
  newPass,
  oldPass,
}: ChangePasswordProps) => {
  const body = { newPass, oldPass };

  return await api
    .post("/myPage/chnagePass", body, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

export interface MypageInfoResponse {
  dept_code: string;
  update_id: string;
  login_id: string;
  user_type: string;
  is_active: string;
  updated_at: string;
  create_id: string;
  name: string;
  created_at: string;
  company_code: string;
  id: string;
}

export const getMypageInfo = async () => {
  return await api
    .get("/api/myPage/info", { headers })
    .then((res: AxiosResponse<ResponseData<MypageInfoResponse>>) => {
      return res.data;
    });
};

export const updateMypageInfo = async () => {
  return await api
    .post("/api/myPage/updateMyPage", { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

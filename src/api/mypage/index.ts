import axios, { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { ResponseStatus } from "../../types";
import { api, dispatchError } from "..";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

// api
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
    .get("/api/v1/myPage/info", { headers })
    .then((res: AxiosResponse<ResponseData<MypageInfoResponse>>) => {
      return res.data;
    });
};

interface ChangePasswordProps {
  newPass: string;
  oldPass: string;
}

export const changePassword = async ({
  newPass,
  oldPass,
}: ChangePasswordProps) => {
  const formData = new FormData();
  Object.entries({ newPass, oldPass }).map((entry) =>
    formData.append(entry[0], entry[1])
  );

  const body = { newPass, oldPass };

  return await api
    .post("/api/v1/myPage/changePass", formData, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

export const updateMypageInfo = async (props: { name: string }) => {
  return await api
    .post("/api/v1/myPage/updateMyPage", props, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

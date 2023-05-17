import axios, { AxiosResponse } from "axios";
import jwt from "jsonwebtoken";
import { parseAccessToken } from "../../lib/token";
import { ResponseData, ResponseCode } from "../../types";
import { ResponseStatus } from "../../types";
import { encrypt, decrypt } from "../../lib/encrypt";
import { api, dispatchError } from "..";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  packages: {
    package_group_id: string;
    package_group_name: string;
  }[];
  refreshToken: string;
}

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

const setStorageAndHeaderByToken = (
  accessToken: string,
  refreshToken: string
) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");

  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);

  localStorage.setItem(
    "user_info",
    JSON.stringify(parseAccessToken(accessToken))
  );
};

// api
export const requestLogin = async ({ email, password }: LoginRequest) => {
  return await api
    .post(`/api/auth/authenticate`, { email, password })
    .then((res: AxiosResponse<ResponseData<LoginResponse>>) => {
      return res.data;
    });
};

export const requestAccessToken = async () => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
  };

  return await api
    .post(`/api/auth/getAccessToken`, undefined, { headers })
    .then((res: AxiosResponse<ResponseData<RefreshResponse>>) => {
      if (res.data.success) {
        const { accessToken, refreshToken } = res.data.data;
        setStorageAndHeaderByToken(accessToken, refreshToken);
      }

      return res.data;
    });
};

export const requestLogout = async () => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
  };

  return await api
    .post(`/api/auth/logout`, undefined, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

export const testApi = async () => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };

  return await api
    .get(`/api/api/test/test`, {
      headers,
    })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      console.log("test 완료");
    });
};

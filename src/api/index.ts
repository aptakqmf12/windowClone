import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { requestAccessToken } from "./sign";
import { ResponseStatus, ResponseCode, ResponseData } from "../types";

const Instance = () => {
  return axios.create({
    timeout: 5000,
  });
};

export const api = Instance();

api.interceptors.request.use(
  (request) => {
    const parsedURL = request.url;

    if (parsedURL?.includes("getAccessToken")) {
      request.headers.Authorization = `Bearer ${localStorage.getItem(
        "refresh_token"
      )}`;
      return request;
    } else {
      if (parsedURL?.startsWith("/api/auth")) {
        return request;
      }

      request.headers.Authorization = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
      return request;
    }
  },
  (error) => {}
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const { response, config } = err;

    if (response.data.message === ResponseCode.TOKEN_EXPIRED) {
      const res = await requestAccessToken();

      if (res.success === true) {
        return await api.request(config);
      } else {
        // 에러
        return Promise.reject(err);
      }
    } else if (response.data.message === ResponseCode.EXPIRED_REFRESH_TOKEN) {
      window.location.href = "/signin";
    }
  }
);

// error
export const dispatchError = (error: AxiosError<ResponseData<any>>) => {
  switch (error.response?.data.message) {
    case ResponseCode.INVALID_CREDENTIALS:
      return console.log("인증 실패");

    case ResponseCode.ACCOUNT_LOCKED:
      return console.log("계정 잠김");

    case ResponseCode.ACCOUNT_DISABLED:
      return console.log("계정 비활성화됨");

    case ResponseCode.UNRELIABLE_TOKEN:
      return console.log("토큰 위변조됨");

    case ResponseCode.UNKNOWN_REFRESH_TOKEN:
      return console.log("매칭되는 Refresh Token이 없음");

    case ResponseCode.INVALID_TOKEN:
      return console.log("잘못된 토큰");

    case ResponseCode.GET_TOKEN_FAILED:
      return console.log("Bearer 빠진듯?");

    case ResponseCode.TOKEN_EXPIRED:
      return console.log("Access Token 만료");

    case ResponseCode.EXPIRED_REFRESH_TOKEN:
      return console.log("Refresh Token 만료");

    case ResponseCode.INVALID_REQUEST:
      return console.log(
        "일반 요청에 RefreshToken을 받았거나 인증 중 서버오류"
      );

    case ResponseCode.UNKNOWN_EXCEPTION:
      return console.log("알 수 없는 오류");
  }
};

// query params
export const generateQueryParamUrl = (
  url: string,
  params: Record<string, any>
) => {
  const queryParam = Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `${url}${queryParam ? `?${queryParam}` : ""}`;
};

// form data
export const genereateFormData = (props: Record<string, any>) => {
  const formData = new FormData();
  Object.entries(props).map((entry) => formData.append(entry[0], entry[1]));

  return formData;
};

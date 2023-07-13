import { ModeType } from "@store/common";
import { AxiosResponse } from "axios";

interface BaseResponse {
  message: string | null;
  success: boolean;
}

export interface PaginationData {
  lastIndex: number;
  pageIndex: number;
  pagePerSize: number;
  startIndex: number;
  totalCount: number;
}

export interface DataResponse<T> extends BaseResponse {
  data: T;
}
export interface ListResponse<T, L> extends BaseResponse {
  data: T;
  list: L;
}

export enum ResponseStatus {
  SUCCESS = 200,
  LOGIN_FAIL = 401,
}

export enum ResponseCode {
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS", // 인증 실패
  ACCOUNT_LOCKED = "ACCOUNT_LOCKED", // 계정 잠김
  ACCOUNT_DISABLED = "ACCOUNT_DISABLED", // 계정 비활성화됨
  UNRELIABLE_TOKEN = "UNRELIABLE_TOKEN", // 토큰 위변조됨
  UNKNOWN_REFRESH_TOKEN = "UNKNOWN_REFRESH_TOKEN", // 매칭되는 Refresh Token이 없음
  INVALID_TOKEN = "INVALID_TOKEN", // 잘못된 토큰
  GET_TOKEN_FAILED = "GET_TOKEN_FAILED", // Bearer 빠진듯?
  TOKEN_EXPIRED = "TOKEN_EXPIRED", // Access Token 만료
  EXPIRED_REFRESH_TOKEN = "INVALID_CREDENTIALS", // Refresh Token 만료
  INVALID_REQUEST = "INVALID_REQUEST", // 일반 요청에 RefreshToken을 받았거나 인증 중 서버오류
  UNKNOWN_EXCEPTION = "UNKNOWN_EXCEPTION", // 알 수 없는 오류
  ACCESS_DENIED = "ACCESS_DENIED", // 권한 없음
}

export enum ValidationText {
  EMAIL_INVALIDATION = "이메일 형식에 맞게 입력",
  PASSWORD_INVALIDATION = "영문,숫자,특수문자(!,@,#,$,%) 모두 포함하여 8~15자리를 입력해주세요.",
}

export enum UserRole {
  ADMIN = "ADMIN",
  SITE_USER = "SITE_USER",
  WORKER = "WORKER",
}

export interface UserType {
  backgroundFileId: string;
  backgroundFileSeq: number;
  companyCode: string;
  companyName: string;
  siteId: string;
  siteName: string;
  headerCompanyName: string;
  name: string;
  deptName: string;
  email: string;
  id: string;
  imgFileId: string;
  isActive: "Y" | "N";
  phone: string;
  positionName: string;
  userTypeName: string;
  userType: string;
  setting: boolean;
  styleMode: ModeType;
  defaultImgYn: "Y" | "N";
  widgetYn: "Y" | "N";
  partnerId: string;
}

export type MuiColorType =
  | "warning"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success";

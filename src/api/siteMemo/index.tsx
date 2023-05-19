import axios, { AxiosResponse } from "axios";
import { DataResponse, ListResponse } from "../../types";
import { ResponseStatus } from "../../types";
import { api, generateQueryParamUrl, genereateFormData } from "..";

interface getMemoProps {
  title?: string;
  pageIndex?: number;
  pagePerSize?: number;
  useYn?: string;
}

export interface MemoInfo {
  memoId?: string;
  title: string;
  content?: string;
  userId?: string;
  createDate?: string;
  saveType?: string;
  useYn?: string;
}

export const getSiteMemoList = async (props: getMemoProps) => {
  const url = generateQueryParamUrl("api/v1/site/memo/getSiteMemoList", props);

  return await api
    .get(url)
    .then((res: AxiosResponse<ListResponse<any, MemoInfo[]>>) => {
      return res.data;
    });
};

export const saveSiteMemoInfo = async (props: MemoInfo) => {
  const body = genereateFormData(props);

  return await api
    .post("/api/v1/site/partners/saveSiteMemoInfo", body)
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
      return res.data;
    });
};

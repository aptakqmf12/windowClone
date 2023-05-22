import { AxiosResponse } from "axios";
import { DataResponse, ListResponse } from "../../types";
import { api, generateQueryParamUrl } from "..";

interface DownLoadFileProps {
  fileId: string;
  fileSeq: string;
}

export const downloadFile = async (props: DownLoadFileProps) => {
  const url = generateQueryParamUrl("/api/file/download", props);

  return await api
    .get(url)
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
      return res.data;
    });
};

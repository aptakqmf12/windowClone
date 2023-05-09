import axios, { AxiosResponse } from "axios";
import { ResponseData, ResponseCode } from "../../types";
import { ResponseStatus } from "../../types";
import { api, dispatchError, generateQueryParamUrl } from "..";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

interface RequestCreateAccountProps {
  nonce: string;
  uuid: string;
}

// api
export const requestCreateAccount = async (
  props: RequestCreateAccountProps
) => {
  const url = generateQueryParamUrl(
    "/api/v1/userMgr/reqCreateAccountCheck",
    props
  );

  return await api
    .post(url, props, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

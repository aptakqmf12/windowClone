import axios, { AxiosResponse } from "axios";
import { ResponseData, ResponseCode, UserRole } from "../../types";
import { ResponseStatus } from "../../types";
import { api, dispatchError, generateQueryParamUrl } from "..";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

interface getUserProps {
  name?: string;
}

// api
export interface UserResponse {
  auth: UserRole;
  companyCode: string;
  companyName: string;
  createId: string;
  createdAt: string;
  deletedYn: "Y" | "N";
  deptCode: string;
  deptName: string;
  id: string;
  isActive: string;
  loginId: string;
  name: string;
  updateId: string;
  updatedAt: string;
  userType: string;
}
export const getUserList = async (props: getUserProps) => {
  const url = generateQueryParamUrl("/api/v1/userMgr/getUserList", props);

  return await api
    .get(url)
    .then((res: AxiosResponse<ResponseData<UserResponse[]>>) => {
      return res.data;
    });
};

export const getWorkerList = async ({ searchText }: { searchText: string }) => {
  const url = generateQueryParamUrl("/api/v1/userMgr/getWorkerList", {
    searchText,
  });

  return await api
    .get(url, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

interface getRetireeProps {
  searchText: string;
}

export const getRetireeList = async ({
  searchText,
}: {
  searchText: string;
}) => {
  const url = generateQueryParamUrl("/api/v1/userMgr/getRetireeList", {
    searchText,
  });

  return await api
    .get(url, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

interface SaveSiteRoleInfoProps {
  companyCode: string;
  roleName?: string;
  siteId?: string;
  useYn?: "Y" | "N";
}

export const saveSiteRoleInfo = async (props: SaveSiteRoleInfoProps) => {
  // formData로 모두?.
  const body = props;

  return await api
    .post("/api/v1/site/role/saveSiteRoleInfo", { body }, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
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

export const addRetiree = async ({ retirees }: { retirees: string }) => {
  return await api
    .post("/api/v1/userMgr/addRetiree", { retirees }, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

interface CreateAccountSelfProps {
  auth: UserRole;
  email: string;
  phone: string;
}

export const createAccountSelf = async (props: CreateAccountSelfProps) => {
  return await api
    .post("/api/v1/userMgr/createAccountSelf", props, { headers })
    .then((res: AxiosResponse<ResponseData<any>>) => {
      return res.data;
    });
};

// interface CreateUserInfoProps {
//     auth: UserRole;
// 너무많아..
//   }

//   export const createUserInfo = async (props: CreateUserInfoProps) => {
//     return await api
//       .post("/api/v1/userMgr/createAccountSelf", props, { headers })
//       .then((res: AxiosResponse<ResponseData<any>>) => {
//         return res.data;
//       });
//   };

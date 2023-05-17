import axios, { AxiosResponse } from "axios";
import { ListResponse, ResponseCode, UserRole } from "../../types";
import { ResponseStatus } from "../../types";
import { api, generateQueryParamUrl } from "..";

interface getUserProps {
  name?: string;
}

// api

interface UserDataType {
  lastIndex: number;
  pageIndex: number;
  pagePerSize: number;
  startIndex: number;
  totalCount: number;
}
export interface UserListType {
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
    .then((res: AxiosResponse<ListResponse<UserDataType, UserListType[]>>) => {
      return res.data;
    });
};

export const getWorkerList = async ({ searchText }: { searchText: string }) => {
  const url = generateQueryParamUrl("/api/v1/userMgr/getWorkerList", {
    searchText,
  });

  return await api
    .get(url)
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
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
    .get(url)
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
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
    .post("/api/v1/site/role/saveSiteRoleInfo", { body })
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
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
    .post(url, props)
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
      return res.data;
    });
};

export const addRetiree = async ({ retirees }: { retirees: string }) => {
  return await api
    .post("/api/v1/userMgr/addRetiree", { retirees })
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
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
    .post("/api/v1/userMgr/createAccountSelf", props)
    .then((res: AxiosResponse<ListResponse<any, any>>) => {
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
//       .then((res: AxiosResponse<ListResponse<any, any>>) => {
//         return res.data;
//       });
//   };

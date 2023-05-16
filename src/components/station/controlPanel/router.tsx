import UserList from "./userManage/userList/view";
import CreateUser from "./userManage/createUser";
import ReqeustCreateUser from "./userManage/reqeustCreateUser";
import PartnerList from "./partnerManage/partnerList";
import Permission from "./permission";
import FormRoom from "./formRoom";

export const Paths: Record<string, string[]> = {
  HOME: ["HOME"],
  DELEGATION: ["위임전결규정"],
  FORM_ROOM: ["양식함"],
  USER_LIST: ["사용자관리", "사용자 목록"],
  REQUEST_CREATE_USER: ["사용자관리", "계정생성요청"],
  CREATE_USER: ["사용자관리", "계정 직접 생성"],
  PERMISSION: ["권한설정"],
  PARTNER_MANAGE: ["협력사관리"],
  CODE_MANAGE: ["코드관리"],
};

export const renderCompontntByPath = (path: string[]) => {
  switch (path) {
    case Paths.DELEGATION:
      return <div>위임전결규정</div>;

    case Paths.FORM_ROOM:
      return <FormRoom />;

    case Paths.USER_LIST:
      return <UserList />;

    case Paths.REQUEST_CREATE_USER:
      return <ReqeustCreateUser />;

    case Paths.CREATE_USER:
      return <CreateUser />;

    case Paths.PERMISSION:
      return <Permission />;

    case Paths.PARTNER_MANAGE:
      return <PartnerList />;

    case Paths.CODE_MANAGE:
      return <div>코드관리</div>;

    default:
      return <></>;
  }
};

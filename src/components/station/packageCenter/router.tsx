import React from "react";
import NestedAccordion from "@components/layout/nestedAccordion";
import RetireesManagement from "./sub/retireesList";
import RetireesList from "./sub/retireesList";

export const enum Paths {
  DASHBOARD = "대시보드 관리",
  CONSTRUCTION_OVERVIEW = "공사개요",
  WORKER_MANAGE = "근로자 관리",
  WORKER_LIST = "근로자 목록",
  WORKER_ENTERANCE_MANAGE = "근로자 출역관리",
  RETIREES_LIST = "퇴직자 목록",

  WORKER_SAFETY_CHECK = "근로자 안전점검",
  OCCUPATIONAL_SAFETY_AND_HEALTH_ACT = "안전보건지지침",
  LEGAL_INFORMATION = "법령정보",
  SCHEDULER = "스케쥴러",
  MEMO = "MEMO",
  TO_DO_LIST_MANAGE = "TO DO LIST 관리",
  EMERGENCY_CALL = "비상연락망",
  RISK_NOTIFICATION = "위험알림",
}
export const renderCompontntByPath = (path: Paths) => {
  switch (path) {
    case Paths.DASHBOARD:
      return <div>대시보드</div>;
    case Paths.CONSTRUCTION_OVERVIEW:
      return <div>공사개요</div>;
    case Paths.WORKER_MANAGE:
      return <div>근로자 관리</div>;
    case Paths.WORKER_LIST:
      return <div>근로자 목록</div>;
    case Paths.WORKER_ENTERANCE_MANAGE:
      return <div>근로자 출역관리</div>;
    case Paths.RETIREES_LIST:
      return <RetireesList />;
    case Paths.WORKER_SAFETY_CHECK:
      return <div>근로자 안전점검</div>;
    case Paths.OCCUPATIONAL_SAFETY_AND_HEALTH_ACT:
      return <div>안전보건지지침</div>;
    case Paths.LEGAL_INFORMATION:
      return <div>법령정보</div>;
    case Paths.SCHEDULER:
      return <div>스케쥴러</div>;
    case Paths.MEMO:
      return <div>MEMO</div>;
    case Paths.TO_DO_LIST_MANAGE:
      return <div>TO DO LIST 관리</div>;
    case Paths.EMERGENCY_CALL:
      return <div>비상연락망</div>;
    case Paths.RISK_NOTIFICATION:
      return <div>위험알림</div>;

    default:
      return <></>;
  }
};

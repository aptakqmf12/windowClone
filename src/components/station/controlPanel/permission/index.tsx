import { useState, SyntheticEvent } from "react";
import { Typography, Tab, Box, Tabs, Button } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";

import styled from "styled-components";
import PackageMenuRolePermission from "./tabs/packageMenuRolePermission";
import UserRolePermission from "./tabs/userRolePermission";

export default function Permission() {
  const [tab, setTab] = useState("package");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <div>
      <div.wrap>
        <Typography fontSize={20} fontWeight={600} mb={2}>
          권한설정
        </Typography>
        <TabContext value={tab}>
          <Tabs value={tab} onChange={handleChange}>
            <Tab value="package" label="패키지 메뉴 권한 설정" />

            <Tab value="user" label="사용자 권한 설정" />
          </Tabs>
          <TabPanel value="package" className="tab">
            <PackageMenuRolePermission />
          </TabPanel>
          <TabPanel value="user" className="tab">
            <UserRolePermission />
          </TabPanel>
        </TabContext>
      </div.wrap>
    </div>
  );
}
const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 80%;
    margin: 5% auto;
    .tab {
      border: 1px solid black;
      width: 100%;
    }
  `,
};

import { useState } from "react";
import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { Home, Mail, Inbox, People } from "@mui/icons-material";

export interface TemplateProps {
  name: string;
  component: React.ReactNode;
}

export enum TabStatus {
  ONE,
  TWO,
  THREE,
  FOUR,
}

export default function Template({ data }: { data: TemplateProps[] }) {
  const [currentTab, setCurrentTab] = useState<string | undefined>();

  const content = data.find((tab) => tab.name === currentTab)?.component;

  return (
    <div.wrap>
      <div className="leftbar">
        {data.map((tab, index) => (
          <ListItem
            key={index}
            onClick={() => setCurrentTab(tab.name)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {[<Home />, <Mail />, <Inbox />, <People />, <Mail />][index]}
              </ListItemIcon>
              <ListItemText primary={tab.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </div>

      <div className="content">{content}</div>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    .leftbar {
      width: 500px;
    }

    .content {
      width: 100%;

      padding: 10px;
      background-color: #ffffff;
      box-sizing: border-box;
    }
  `,
};

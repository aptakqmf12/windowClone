import { useState, useEffect } from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { MypageInfoResponse, getMypageInfo } from "@api/mypage";

import MypageView from "./view";
import MypageEdit from "./edit";

export default function Mypage() {
  const [tab, setTab] = useState<"view" | "edit">("view");

  const { isLoading, data } = useQuery(["queryKey"], getMypageInfo);

  return (
    <div.wrap>
      <div.top>
        <div>
          <Avatar sx={{ width: 145, height: 145 }} />
        </div>

        <div>
          <Typography fontSize={20} fontWeight={600}>
            MASTER
          </Typography>
        </div>
      </div.top>

      <div.body>
        {tab === "view" ? (
          <MypageView setTab={setTab} />
        ) : (
          <MypageEdit setTab={setTab} />
        )}
      </div.body>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100%;
  `,
  top: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-bottom: 50px;
  `,
  body: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    overflow: auto;

    .info {
      display: flex;
      justify-content: space-between;
      gap: 20px;

      .key {
        width: 80px;
      }
      .value {
        width: calc(100% - 80px);
      }
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  `,
};

import { getMypageInfo } from "@api/mypage";
import { Avatar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

import MypageEdit from "./edit";
import MypageView from "./view";

export default function Mypage() {
  const [tab, setTab] = useState<"view" | "edit">("view");
  const [mypageInfo, setMypageInfo] = useState<any>();

  const record = async () => {
    const res = await getMypageInfo();

    setMypageInfo(res.data);
  };

  useEffect(() => {
    record();
  }, []);

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

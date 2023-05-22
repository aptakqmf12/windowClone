import { getMypageInfo, MypageInfoResponse } from "@api/mypage";
import { Avatar, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { People } from "@mui/icons-material";
import { useWindowStore } from "@store/window";
import { v4 as uuidv4 } from "uuid";

import MypageEdit from "./edit";

export default function Mypage() {
  const { appendWindow } = useWindowStore();

  const [tab, setTab] = useState<"view" | "edit">("view");
  const [img, setImg] = useState<any>(null);
  const [mypageInfo, setMypageInfo] = useState<MypageInfoResponse>();

  const record = async () => {
    const res = await getMypageInfo();

    setMypageInfo(res.data);
  };

  useEffect(() => {
    record();
  }, []);

  if (!mypageInfo) return <></>;
  const { email, userTypeName } = mypageInfo;

  return (
    <div.wrap>
      <div.top>
        <div>
          <Avatar sx={{ width: 145, height: 145 }} />
        </div>

        <div>
          <Typography fontSize={20} fontWeight={600}>
            {userTypeName}
          </Typography>
        </div>
      </div.top>

      <Typography>{email}</Typography>

      <div className="btn">
        <Button
          variant="contained"
          onClick={() => {
            appendWindow({
              uuid: uuidv4(),
              component: <MypageEdit setTab={setTab} mypageInfo={mypageInfo} />,
              icon: <People />,
              name: "마이 페이지 편집",
            });
          }}
        >
          정보수정
        </Button>
      </div>
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

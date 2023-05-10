import React from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MypageInfoResponse, getMypageInfo } from "@api/mypage";

export default function MypageView({
  setTab,
}: {
  setTab: (v: "view" | "edit") => void;
}) {
  const { isLoading, data } = useQuery(["queryKey"], getMypageInfo);

  const USER_DATA = [
    { key: "이름", value: "김민정" },
    { key: "연락처", value: "010-1234-5678" },
    { key: "소속", value: "기술연구소" },
    { key: "이메일", value: "abcdefghifqjhfqkjhabcdefghifqjhfqkjh@naver.com" },
  ];

  return (
    <div>
      {USER_DATA.map((d, i) => (
        <div className="info" key={i}>
          <div className="key">
            <Typography>{d.key}</Typography>
          </div>
          <div className="value">
            <Typography>{d.value}</Typography>
          </div>
        </div>
      ))}

      <div className="btn">
        <Button variant="contained" onClick={() => setTab("edit")}>
          수정하기
        </Button>
      </div>
    </div>
  );
}

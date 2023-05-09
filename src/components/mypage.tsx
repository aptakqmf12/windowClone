import { useState, useEffect } from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { MypageInfoResponse, getMypageInfo } from "@api/mypage";
import { useQuery } from "@tanstack/react-query";

export default function Mypage() {
  const { isLoading, data: mypageData } = useQuery(["queryKey"], getMypageInfo);

  return (
    <div.wrap>
      <div.top>
        <div>
          <Avatar />
        </div>

        <div>
          <Typography>MASTER</Typography>
        </div>
        <div>
          <Typography>민정건설</Typography>
        </div>
        <div>
          <Typography>
            {/* {isLoading ? "loading..." : data?.data.name}님 */}
            {mypageData?.data.name}
          </Typography>
        </div>
      </div.top>

      <div.body>
        <div className="info">
          <div>연락처</div>
          <div>010-1234-5678</div>
        </div>
        <div className="info">
          <div>소속</div>
          <div>010-1234-5678</div>
        </div>
        <div className="info">
          <div>직급</div>
          <div>010-1234-5678</div>
        </div>
        <div className="info">
          <div>이메일</div>
          <div>010-1234-5678</div>
        </div>

        <Button variant="contained">수정하기</Button>
      </div.body>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 100px;
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
    align-items: center;
    gap: 10px;
    .info {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  `,
};

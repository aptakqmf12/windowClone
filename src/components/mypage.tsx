import { useState, useEffect } from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { MypageInfoResponse, getMypageInfo } from "@api/mypage";
import { useQuery } from "@tanstack/react-query";

export default function Mypage() {
  const { isLoading, data: mypageData } = useQuery(["queryKey"], getMypageInfo);

  const USER_DATA = [
    { key: "이름", value: "김민정" },
    { key: "연락처", value: "010-1234-5678" },
    { key: "소속", value: "기술연구소" },
    { key: "이메일", value: "abcdefghifqjhfqkjh@naver.com" },
  ];

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

        <div>
          <Typography>
            {/* {isLoading ? "loading..." : data?.data.name}님 */}
            {mypageData?.data.name}
          </Typography>
        </div>
      </div.top>

      <div.body>
        {USER_DATA.map((data, i) => (
          <div className="info">
            <div className="key">
              <Typography>{data.key}</Typography>
            </div>
            <div className="value">
              <Typography>{data.value}</Typography>
            </div>
          </div>
        ))}

        <div className="btn">
          <Button variant="contained">수정하기</Button>
        </div>
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
    align-items: flex-start;
    gap: 10px;

    .info {
      display: flex;
      justify-content: space-between;
      gap: 20px;

      .key {
        width: 80px;
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

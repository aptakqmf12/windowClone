import { useState } from "react";
import { Avatar, Button, Typography } from "@mui/material";
import LabelComponent from "@components/common/labelComponent";
import SelectCustom from "@components/common/SelectForm";
import { UserListType } from "@api/userManage";

interface EditUserProps {
  setTab: (v: "view" | "edit") => void;
  rows: UserListType | undefined;
}

export default function UserListEdit({ setTab, rows }: EditUserProps) {
  const [team, setTeam] = useState("");
  const [level, setLevel] = useState("");

  const goBack = () => {
    setTab("view");
  };

  return (
    <div>
      <Avatar />

      <LabelComponent
        label={"이름"}
        value={<Typography>{rows?.name}</Typography>}
      />

      <LabelComponent
        label="담당부서"
        value={
          <SelectCustom
            value={team}
            defaultValue={"기술연구소"}
            setValue={setTeam}
            menuList={["기술연구소", "707호"]}
          />
        }
      />

      <LabelComponent
        label="직급"
        value={
          <SelectCustom
            value={level}
            defaultValue={"주임"}
            setValue={setLevel}
            menuList={["주임", "선임", "책임"]}
          />
        }
      />

      <LabelComponent label={"소속"} value={<Typography>김민정</Typography>} />

      <LabelComponent
        label={"아이디"}
        value={<Typography>{rows?.loginId}</Typography>}
      />

      <LabelComponent
        label="계정타입"
        value={
          <SelectCustom
            value={level}
            defaultValue={"MASTER"}
            setValue={setLevel}
            menuList={["MASTER", "선임", "책임"]}
          />
        }
      />

      <div style={{ marginTop: 50 }}>
        <Button variant="contained" color="primary" onClick={() => {}}>
          수정하기
        </Button>
        <Button variant="contained" color="secondary" onClick={() => {}}>
          삭제하기
        </Button>
      </div>

      <Button onClick={goBack}>뒤로가기</Button>
    </div>
  );
}

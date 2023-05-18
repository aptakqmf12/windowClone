import { useState } from "react";
import { Settings } from "@mui/icons-material";
import { Button } from "@mui/material";
import SettingModal from "@components/layout/widget/settingModal";

export default function SettingWidget() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div>
        <Settings />
      </div>

      <div>위젯 설정</div>
      <Button variant="contained" onClick={() => setOpenModal(true)}>
        위젯 설정
      </Button>

      {openModal && <SettingModal onClose={() => setOpenModal(false)} />}
    </div>
  );
}

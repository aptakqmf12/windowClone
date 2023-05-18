import { Button, Fab, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export default function SettingModal({ onClose }: { onClose: () => void }) {
  return ReactDOM.createPortal(
    <SettingModalWrap onClose={onClose} />,
    document.getElementById("x-modal")!
  );
}

const SettingModalWrap = ({ onClose }: { onClose: () => void }) => {
  const [open, setOpen] = useState(false);
  const save = () => {
    onClose();
  };
  return (
    <div.wrap>
      <div.save>
        <Button variant="contained" color="secondary" onClick={save}>
          저장
        </Button>
      </div.save>

      <div.add>
        <Fab color="secondary" onClick={() => setOpen(true)}>
          <Add />
        </Fab>
      </div.add>

      {open && (
        <div.widgetList>
          <div className="head">
            <Typography>위젯</Typography>
            <Button onClick={() => setOpen(false)}>X</Button>
          </div>

          <div className="grid">
            <div className="item">1</div>
            <div className="item">1</div>
            <div className="item">1</div>
            <div className="item">1</div>
            <div className="item">1</div>
            <div className="item">1</div>
          </div>
        </div.widgetList>
      )}
    </div.wrap>
  );
};

const div = {
  wrap: styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
  `,

  save: styled.div`
    position: absolute;
    top: 30px;
    right: 60px;
  `,
  add: styled.div`
    position: absolute;
    bottom: 100px;
    left: 50px;
  `,
  widgetList: styled.div`
    position: absolute;
    bottom: 100px;
    left: 150px;
    width: 550px;
    height: 640px;
    padding: 20px 20px;
    background-color: #a2a2a2;

    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 550px;
      gap: 30px;
      overflow-y: auto;
      .item {
        background-color: #f4f4f4;

        height: 200px;
        border-radius: 10px;
      }
    }
  `,
};

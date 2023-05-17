import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import {
  Fullscreen,
  FullscreenExit,
  Close,
  Remove,
  ContentCopy,
  CropSquare,
} from "@mui/icons-material";

import { useWindowStore } from "@store/window";
import type { WindowType } from "@store/window";
import Resizer from "./Resizer";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { ModeType, useCommonStore } from "@store/common";

export const Direction = {
  Top: "top",
  TopLeft: "topLeft",
  TopRight: "topRight",
  Right: "right",
  Bottom: "bottom",
  BottomLeft: "bottomLeft",
  BottomRight: "bottomRight",
  Left: "left",
};

export default function Window(props: WindowType) {
  const { t } = useTranslation();
  const { mode } = useCommonStore();

  const windowRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const {
    removeWindow,
    toggleScreenSize,
    setWindowPosition,
    focusWindow,
    toggleShowWindow,
  } = useWindowStore();
  const {
    name,
    uuid,
    component,
    isFullScreen,
    isShow,
    zIndex,
    directory,
    x,
    y,
    w,
    h,
  } = props;
  const isFocused = zIndex === 2;

  const [isDragging, setIsDragging] = useState(false);
  const [{ currX, currY }, setPosition] = useState({ currX: x, currY: y });
  const [{ width, height }, setSize] = useState<{
    width: string | number;
    height: string | number;
  }>({ width: w, height: h });

  const onClose = () => removeWindow(uuid);
  const onFocus = () => {
    if (isFocused) return;
    focusWindow(uuid);
  };
  const onToggleFullScreen = () => toggleScreenSize(uuid);
  const onHide = () => toggleShowWindow(uuid);

  useEffect(() => {
    if (isFullScreen) {
      setPosition({ currX: 0, currY: 0 });
      setSize({ width: "100vw", height: "100vh" });
    } else {
      setPosition({ currX: x, currY: y });
      setSize({ width: w, height: h });
    }
  }, [isFullScreen]);

  const THRESHOLD = 30;
  const bounds = {
    left: (width as number) * -1 + THRESHOLD,
    top: -10,
    right: window.innerWidth - THRESHOLD,
    bottom: window.innerHeight - THRESHOLD,
  };

  const sx = { width: 20, height: 20, fill: "#7E7E7E" };

  if (isShow === false) return <></>;

  return (
    <Draggable
      onMouseDown={onFocus}
      onDrag={(_, data) => {
        setIsDragging(true);
        setPosition({ currX: data.x, currY: data.y });
      }}
      onStop={(_, data) => {
        setIsDragging(false);
        if (!isDragging) return;
        setWindowPosition(uuid, { x: data.x, y: data.y });
      }}
      disabled={isFullScreen}
      bounds={bounds}
      handle={".handle"}
      defaultPosition={{ x: 0, y: 0 }}
      position={{ x: currX, y: currY }}
    >
      <div.wrap
        className={isDragging ? "transparent" : ""}
        style={{ width, height, zIndex }}
        mode={mode}
        ref={windowRef}
      >
        <div.head
          onDoubleClick={onToggleFullScreen}
          isFullScreen={isFullScreen}
          className="handle"
          ref={handleRef}
        >
          <div className="title">
            <Typography fontSize={20} fontWeight={600}>
              {name}
            </Typography>
          </div>

          <div className="btns">
            <button onClick={onHide}>
              <Remove sx={sx} />
            </button>
            <button onClick={onToggleFullScreen}>
              {isFullScreen ? <ContentCopy sx={sx} /> : <CropSquare sx={sx} />}
            </button>
            <button onClick={onClose}>
              <Close sx={sx} />
            </button>
          </div>
        </div.head>

        <BreadCrumbs directory={directory} />

        <div.body mode={mode}>
          <Resizer
            target={windowRef}
            currX={currX}
            currY={currY}
            width={width as number}
            height={height as number}
            uuid={uuid}
            setPosition={setPosition}
            setSize={setSize}
          />

          {component}
        </div.body>
      </div.wrap>
    </Draggable>
  );
}

const BreadCrumbs = ({ directory }: { directory: string[] }) => {
  return (
    <div.breadCrumb>
      {directory.length > 0 && (
        <>
          <Typography fontSize={12} color={"white"}>
            {directory.slice(0, directory.length - 1).join(" / ")}
          </Typography>

          <Typography fontSize={12} fontWeight={600} color={"white"}>
            {directory.length > 1 && <>&nbsp;/&nbsp;</>}

            {directory[directory.length - 1]}
          </Typography>
        </>
      )}
    </div.breadCrumb>
  );
};

const div = {
  wrap: styled.div<{ mode: ModeType }>`
    position: fixed;
    left: 0;
    top: 0;
    color: black;
    margin: auto;
    user-select: none;
    border: 1px #777777 solid;
    background-color: white;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;

    &.transparent {
      opacity: 0.6;
    }
  `,
  head: styled.div<{ isFullScreen: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 4px 10px;

    background-color: #eeeeee;
    cursor: ${(p) => (p.isFullScreen ? "default" : "move")};

    .title {
      display: flex;
      align-items: baseline;
      gap: 4px;
    }
    .btns {
      display: flex;
      gap: 10px;
    }
  `,

  breadCrumb: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
    padding: 0px 12px;

    background-color: #7b7b7b;
  `,

  body: styled.div<{ mode: ModeType }>`
    background: ${({ mode }) =>
      mode === ModeType.DARK ? "#918d8d" : "#ffffff"};
    height: calc(100% - 60px);
    overflow: auto;
  `,
};

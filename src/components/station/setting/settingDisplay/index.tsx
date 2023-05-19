import {
  Button,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { ModeType, useCommonStore } from "@store/common";
import { useState } from "react";
import styled from "styled-components";

export default function SettingDisplay() {
  const { mode, changeMode } = useCommonStore();

  const [file, setfile] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setfile(file);

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      if (typeof result === "string") {
        setPreviewImg(result);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div.wrap>
      <div.mode.wrap>
        <div>
          <Typography fontWeight={600}>스타일 설정(모드 설정)</Typography>
        </div>

        <>
          <RadioGroup
            onChange={(e, value) => {
              changeMode(value as ModeType);
            }}
          >
            <div.mode.optionWrap>
              <div.mode.option>
                <div className="radio">
                  <FormControlLabel
                    label={<Typography>Light</Typography>}
                    control={
                      <Radio
                        checked={mode === ModeType.LIGHT}
                        value={ModeType.LIGHT}
                      />
                    }
                  />
                </div>
                <div className="img">img</div>
              </div.mode.option>

              <div.mode.option>
                <div className="radio">
                  <FormControlLabel
                    label={<Typography>Dark</Typography>}
                    control={
                      <Radio
                        checked={mode === ModeType.DARK}
                        value={ModeType.DARK}
                      />
                    }
                  />
                </div>
                <div className="img">img</div>
              </div.mode.option>
            </div.mode.optionWrap>
          </RadioGroup>
        </>
      </div.mode.wrap>

      <div.bg.wrap>
        <Typography>배경(사진)</Typography>

        <div.bg.content>
          <div className="img">
            {previewImg && (
              <div>
                <img
                  src={previewImg}
                  alt="Preview"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            )}
          </div>

          <div className="fileInput">
            <input
              accept="*"
              style={{ display: "none" }}
              id="file-input"
              multiple
              type="file"
              onChange={onFileSelect}
            />
            <label htmlFor="file-input">
              <Button variant="contained" component="span">
                파일 선택
              </Button>
            </label>
          </div>

          <div className="palette">
            <Typography>배경색 선택</Typography>

            <ul style={{ display: "flex", gap: 4 }}>
              {[
                "#fff",
                "#8E4F90",
                "#4A355E",
                "#9B2E6A",
                "#6A84BC",
                "#15426F",
                "#1D3D58",
                "#17163E",
                "#215039",
                "#2E424A",
              ].map((color, i) => (
                <li
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: color,
                    border: " 1px black solid",
                  }}
                  key={i}
                ></li>
              ))}
            </ul>
          </div>
        </div.bg.content>
      </div.bg.wrap>
    </div.wrap>
  );
}

const div = {
  wrap: styled.div``,
  mode: {
    wrap: styled.div``,
    optionWrap: styled.div`
      display: flex;
      gap: 20px;
    `,
    option: styled.div`
      width: 250px;
      height: 150px;
      border: 1px black solid;
      .radio {
        display: flex;
        align-items: center;
      }

      .img {
        background-color: #c6c6c6;
        height: 100px;
      }
    `,
  },
  bg: {
    wrap: styled.div``,
    content: styled.div`
      display: flex;
      align-items: flex-end;
      gap: 20px;

      .img {
        width: 300px;
        height: 200px;
        border: 1px black solid;

        overflow: hidden;

        img {
          width: 100%;
          object-position: center;
        }
      }
      .fileInput {
      }
      .palette {
      }
    `,
  },
};

import { css } from "styled-components";

import NanumGothicLight from "/fonts/NanumGothicLight.ttf";
import NanumGothicMedium from "/fonts/NanumGothic.ttf";
import NanumGothicBold from "/fonts/NanumGothicBold.ttf";
import NanumGothicExtraBold from "/fonts/NanumGothicExtraBold.ttf";

import RobotoBlack from "/fonts/Roboto-Black.ttf";
import RobotoBold from "/fonts/Roboto-Bold.ttf";
import RobotoMedium from "/fonts/Roboto-Medium.ttf";
import RobotoRegular from "/fonts/Roboto-Regular.ttf";
import RobotoLight from "/fonts/Roboto-Light.ttf";
import RobotoThin from "/fonts/Roboto-Thin.ttf";

import PretendDardBlack from "/fonts/Pretendard-Black.woff";
import PretendDardExtraBold from "/fonts/Pretendard-ExtraBold.woff";
import PretendDardBold from "/fonts/Pretendard-Bold.woff";
import PretendDardSemiBold from "/fonts/Pretendard-SemiBold.woff";
import PretendDardMedium from "/fonts/Pretendard-Medium.woff";
import PretendDardRegular from "/fonts/Pretendard-Regular.woff";
import PretendDardLight from "/fonts/Pretendard-Light.woff";
import PretendDardExtraLight from "/fonts/Pretendard-ExtraLight.woff";
import PretendDardThin from "/fonts/Pretendard-Thin.woff";

export const GlobalFonts = css`
  //Pretendard
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendDardBlack}) format("woff");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendDardExtraBold}) format("woff");
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendDardBold}) format("woff");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendDardSemiBold}) format("woff");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendDardMedium}) format("woff");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendDardRegular}) format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendDardLight}) format("woff");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendDardExtraLight}) format("woff");
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "Pretendard";
    src: url(${PretendDardThin}) format("woff");
    font-weight: 100;
    font-style: normal;
  }
  // 나눔고딕
  @font-face {
    font-family: "Nanum Gothic";
    src: url(${NanumGothicLight});
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: "Nanum Gothic";
    src: url(${NanumGothicMedium});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Nanum Gothic";
    src: url(${NanumGothicBold});
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Nanum Gothic";
    src: url(${NanumGothicExtraBold});
    font-weight: 800;
    font-style: normal;
  }
  //Roboto
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoThin});
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoLight});
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoMedium});
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBold});
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBlack});
    font-weight: 900;
    font-style: normal;
  }
`;

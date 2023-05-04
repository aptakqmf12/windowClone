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

export const GlobalFonts = css`
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

import SettingDisplay from "./settingDisplay";
import SettingUpdate from "./settingUpdate";
import SettingWidget from "./settingWidget";

export const Paths: Record<string, string[]> = {
  HOME: ["HOME"],
  DISPLAY: ["디스플레이 설정"],
  WIDGET: ["위젯 설정"],
  UPDATE: ["업데이트"],
};

export const renderCompontntByPath = (path: string[]) => {
  switch (path) {
    case Paths.DISPLAY:
      return <SettingDisplay />;
    case Paths.WIDGET:
      return <SettingWidget />;
    case Paths.UPDATE:
      return <SettingUpdate />;

    default:
      return <></>;
  }
};

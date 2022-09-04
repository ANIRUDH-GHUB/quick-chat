import React from "react";
import ActiveUserBox from "./ActiveUserBox/ActiveUserBox";
import "./SettingsPanel.scss";

const SettingPanel: React.FC = () => {
  return (
    <div className="setting-panel">
      <ActiveUserBox />
    </div>
  );
};

export default SettingPanel;

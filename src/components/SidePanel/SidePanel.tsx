import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ActiveUserList from "./ActiveUserList/ActiveUserList";
import ArchivedUserList from "./ArchivedUserList/ArchivedUserList";
import "./SidePanel.scss";
import UserBox from "./UserBox/UserBox";

const SidePanel: React.FC = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="app-header">
          <div className="app-logo">
            <div></div>
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </div>
          <div className="app-title">
            <h2>QuickChat</h2>
          </div>
        </div>
        <UserBox />
        <ActiveUserList />
        <ArchivedUserList />
      </div>
    </div>
  );
};

export default SidePanel;

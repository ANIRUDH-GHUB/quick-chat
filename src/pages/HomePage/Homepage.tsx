import React, { useEffect } from "react";
import "./Homepage.scss";
import { useDispatch } from "react-redux";
import SidePanel from "../../components/SidePanel/SidePanel";
import ChatPanel from "../../components/ChatPanel/ChatPanel";
import SettingPanel from "../../components/SettingsPanel/SettingsPanel";
import { getContactList } from "../../state/slices/contactSlice";

const Home: React.FC = () => {
  // const { contacts } = useSelector((state: STATE) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactList());
  }, [dispatch]);
  return (
    <div className="layout">
      <div className="layout-container">
        <div className="layout-wrapper">
          <SidePanel />
          <ChatPanel />
          <SettingPanel />
        </div>
      </div>
    </div>
  );
};

export default Home;

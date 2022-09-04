import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import ProfileImg from "../../../common/ProfileImg/ProfileImg";
import "./UserBox.scss";
import ToggleButton from "../../../common/ToggleButton/ToggleButton";
import { userImageUrl } from "../../../constants/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setUserStatus } from "../../../state/slices/contactSlice";
import { STATE } from "../../../model/Interfaces";

const UserBox: React.FC = () => {
  const userDetails = {
    name: "Anirudh",
    role: "Lead UI/UX Designer",
  };

  const [status, setStatus] = useState("Active");
  const { contacts } = useSelector((state: STATE) => state);
  const { userStatus } = contacts;
  const dispatch = useDispatch();

  const toggleStatus = () => {
    dispatch(setUserStatus(!userStatus));
    setStatus(userStatus ? "Offline" : "Active");
  };
  return (
    <div className="user-box">
      <div className="user-box-wrapper">
        <ProfileImg src={userImageUrl + "zero"} />
        <div className="user-details">
          <div className="user-name">
            <h4>{userDetails?.name}</h4>
            <FontAwesomeIcon icon={faGear} />
          </div>
          <div className="user-role">
            <h4>{userDetails?.role}</h4>
          </div>
          <div className="user-status">
            <ToggleButton callback={toggleStatus} />
            <h5>{status}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBox;

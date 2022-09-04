import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATE } from "../../../model/Interfaces";
import { archiveUser, unArchiveUser } from "../../../state/slices/archiveSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleUser,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";
import "./ActiveUserBox.scss";

const ActiveUserBox: React.FC = () => {
  const { contacts, archive } = useSelector((state: STATE) => state);
  const { contactList, selectedUser } = contacts;
  const dispatch = useDispatch();

  const isUserArchived = () => {
    return archive.archivedUsers[selectedUser] === true || false;
  };

  const handleClick = () => {
    if (isUserArchived()) {
      dispatch(unArchiveUser(selectedUser));
    } else {
      dispatch(archiveUser(selectedUser));
    }
  };

  const getInitials = () => {
    if (contactList?.[parseInt(selectedUser) - 1]) {
      const { firstname, lastname } = contactList?.[parseInt(selectedUser) - 1];
      return firstname?.[0] + lastname?.[0];
    }
    return "";
  };
  return (
    <div className="user-box">
      <div className="user-box-wrapper">
        <div className="user-profile-img">{getInitials()}</div>
        <div className="user-details">
          <div className="user-email">
            <div className="mail-icon">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </div>
            <h4>{contactList?.[parseInt(selectedUser) - 1]?.email}</h4>
          </div>
          <div className="user-name">
            <div className="profile-icon">
              <FontAwesomeIcon icon={faCircleUser} size="lg" />
            </div>
            <h5>
              {contactList?.[parseInt(selectedUser) - 1]?.firstname}{" "}
              {contactList?.[parseInt(selectedUser) - 1]?.lastname}
            </h5>
          </div>
          <div className="archive-button" onClick={handleClick}>
            {isUserArchived() ? <h4>Unarchive</h4> : <h4>Archive</h4>}
            <div className="archive-icon">
              <FontAwesomeIcon icon={faBoxArchive} size="lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUserBox;

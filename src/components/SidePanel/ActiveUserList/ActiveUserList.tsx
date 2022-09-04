import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserList from "../../../common/UserList/UserList";
import { STATE } from "../../../model/Interfaces";
import "./ActiveUserList.scss";

const ActiveUserList: React.FC = () => {
  const { contacts, archive } = useSelector((state: STATE) => state);
  const [activeUsers, setActiveUsers] = useState<typeof contacts.contactList>(
    []
  );
  const [collapse, setCollapse] = useState<boolean>(false);

  const isArchiveUser = useCallback(
    (id: string) => {
      return archive.archivedUsers?.[id];
    },
    [archive.archivedUsers]
  );

  const getActiveUserList = useCallback(() => {
    let users = contacts?.contactList?.filter(
      (contact) => !isArchiveUser(contact.id)
    );
    setActiveUsers(users);
  }, [contacts?.contactList, isArchiveUser]);

  useEffect(() => {
    getActiveUserList();
  }, [contacts.contactList, archive, getActiveUserList]);

  return (
    <div className="active-user">
      <div className="header" onClick={() => setCollapse(!collapse)}>
        <h3>Active Conversations</h3>
        <div className="user-count">
          <span>{activeUsers?.length}</span>
        </div>
        {collapse ? (
          <FontAwesomeIcon icon={faChevronDown} size="2xs" />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} size="2xs" />
        )}
      </div>
      {collapse ? null : <UserList users={activeUsers} />}
    </div>
  );
};

export default ActiveUserList;

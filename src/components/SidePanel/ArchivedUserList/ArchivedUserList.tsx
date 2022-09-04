import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserList from "../../../common/UserList/UserList";
import { STATE } from "../../../model/Interfaces";
import "./ArchivedUserList.scss";

const ArchivedUserList: React.FC = () => {
  const { contacts, archive } = useSelector((state: STATE) => state);
  const [activeUsers, setActiveUsers] = useState<typeof contacts.contactList>(
    []
  );
  const [collapse, setCollapse] = useState<boolean>(true);

  const isArchiveUser = useCallback(
    (id: string) => {
      return archive.archivedUsers?.[id];
    },
    [archive.archivedUsers]
  );

  const getArchivedUserList = useCallback(() => {
    let users = contacts?.contactList?.filter((contact) =>
      isArchiveUser(contact.id)
    );
    setActiveUsers(users);
  }, [contacts?.contactList, isArchiveUser]);

  useEffect(() => {
    getArchivedUserList();
  }, [contacts, archive, getArchivedUserList]);

  return (
    <div className="active-user">
      <div className="header" onClick={() => setCollapse(!collapse)}>
        <h3>Archived Conversations</h3>
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

export default ArchivedUserList;

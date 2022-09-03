import React from "react";
import { useDispatch } from "react-redux";
import { userImageUrl } from "../../constants/Constants";
import { User } from "../../model/Interfaces";
import { selectUser } from "../../state/slices/contactSlice";
import ProfileImg from "../ProfileImg/ProfileImg";
import "./UserList.scss";

const UserList: React.FC<{ users: User[] }> = ({ users }) => {
  const dispatch = useDispatch();

  const clickHandler = (id: string) => {
    if (id) {
      dispatch(selectUser(id));
    }
  };
  return (
    <div className="user-list">
      <ul>
        {users?.map((user) => (
          <li key={user.id} onClick={() => clickHandler(user.id)}>
            <div className="user-details">
              <ProfileImg
                src={userImageUrl + user.avatar}
                width="50px"
                height="50px"
                bgColor={user?.bgcolor}
              />
              <h4>
                {user.firstname} {user.lastname}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

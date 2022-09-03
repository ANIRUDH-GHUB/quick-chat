import { userBgColors, userImageUrl } from "../constants/Constants";
import { STATE } from "../model/Interfaces";

export const initialState: STATE = {
  archive: { archivedUsers: {} },
  contacts: { contactList: [], selectedUser: "" },
};

export const getRandomBgColor = () => {
  return userBgColors[Math.floor(Math.random() * userBgColors.length)];
};

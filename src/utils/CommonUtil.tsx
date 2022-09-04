import { userBgColors, userImageUrl } from "../constants/Constants";
import { STATE } from "../model/Interfaces";

export const getRandomBgColor = () => {
  return userBgColors[Math.floor(Math.random() * userBgColors.length)];
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactList } from "../../model/Interfaces";
import memberJSON from "./../../assets/json/members.json";
import messageJSON from "./../../assets/json/messages.json";

const initialState: ContactList = {
  contactList: [],
  selectedUser: "1",
  messages: {},
  userStatus: true,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    getContactList: (state) => {
      state.contactList = memberJSON.contacts;
    },
    selectUser: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload;
    },
    setMessageFromApi: (state) => {
      state.messages = messageJSON.messages;
    },
    setUserStatus: (state, action: PayloadAction<boolean>) => {
      state.userStatus = action.payload;
    },
  },
});

export const { getContactList, selectUser, setUserStatus, setMessageFromApi } =
  contactSlice.actions;

export default contactSlice.reducer;

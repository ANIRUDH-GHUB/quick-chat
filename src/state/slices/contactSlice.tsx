import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactList } from "../../model/Interfaces";
import memberJSON from "./../../assets/json/members.json";

const initialState: ContactList = {
  contactList: [],
  selectedUser: "",
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
  },
});

export const { getContactList, selectUser } = contactSlice.actions;

export default contactSlice.reducer;

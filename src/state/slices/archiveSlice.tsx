import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArchiveState } from "../../model/Interfaces";

const initialState: ArchiveState = {
  archivedUsers: {},
};

export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    archiveUser: (state, action: PayloadAction<string>) => {
      state.archivedUsers[action.payload] = true;
    },
    unArchiveUser: (state, action: PayloadAction<number>) => {
      state.archivedUsers[action.payload] = true;
    },
  },
});

export const { archiveUser, unArchiveUser } = archiveSlice.actions;

export default archiveSlice.reducer;

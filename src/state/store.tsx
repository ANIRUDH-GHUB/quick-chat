import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./slices/archiveSlice";
import contactReducer from "./slices/contactSlice";

export const store = configureStore({
  reducer: {
    archive: articleReducer,
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

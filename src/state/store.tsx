import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./slices/archiveSlice";

export const store = configureStore({
  reducer: {
    archive: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

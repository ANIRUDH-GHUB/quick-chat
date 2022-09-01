import { Action } from "redux";
import { Set } from "typescript";

export interface STATE {
  archive: ArchiveState;
}

export interface ArchiveState {
  archivedUsers: { [key: string]: boolean };
}
export interface User {
  id: string;
  name: string;
  email: string;
  designation: string;
}

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

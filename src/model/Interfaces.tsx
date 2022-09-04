import { Action } from "redux";
import { Set } from "typescript";

export interface STATE {
  archive: ArchiveState;
  contacts: ContactList;
}

export interface ArchiveState {
  archivedUsers: { [key: string]: boolean };
}
export interface ContactList {
  contactList: User[];
  selectedUser: string;
  userStatus?: boolean;
  messages: { [key: string]: Message[] };
}
export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  bgcolor?: string;
}
export interface Message {
  id: string;
  author: string;
  data: string;
  status: string;
  time: string;
}
export interface ActionWithPayload<T> extends Action {
  payload: T;
}

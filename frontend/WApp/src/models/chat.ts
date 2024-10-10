import { User } from "./user";

export type ChatRoomItem = {
  id: string;
  roomName: string;
  imgUrl: string;
  latestMessage: string;
  latestActivity: string;
}

export type Message = {
  id: string;
  content: string;
  sendAt: string;
  sender: User;
}

export type ChatRoomMessage = {
  id: string;
  roomName: string;
  description: string;
  imgUrl: string;
  messages: Message[];
  totalMembers: number;
}


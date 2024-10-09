export type User = {
  "id": number,
  "name": string,
  "nickname": string,
  "email": string,
  "imgUrl": string,
  "bio": string
}

export type userConnection = {
  "id": number,
  "name": string,
  "nickname": string,
  "email": string,
  "imgUrl": string,
  "bio": string,
  "connected": boolean,
  "connectionId": string
}

export type UserChat = {
    "id": number,
    "name": string,
    "nickname": string,
    "email": string,
    "imgUrl": string,
    "latestMessage": string,
    "latestActivity": string
}
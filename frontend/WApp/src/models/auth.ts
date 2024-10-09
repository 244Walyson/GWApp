export type LoginResponse = {
  "access_token": string;
  "token_type": string;
  "expires_in": number;
}

export type Credentials = {
  username: string;
  password: string;
}
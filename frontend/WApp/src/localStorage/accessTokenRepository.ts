import { ACCESS_TOKEN_KEY } from "../utils/system";

export const save = (accessToken: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export const get = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export const remove = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

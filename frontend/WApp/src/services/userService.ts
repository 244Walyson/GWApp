import { requestApi } from "@/utils/request";
import { url } from "inspector";

const findMe = () => {
  const config = {
    withCredentials: true,
  }

  const response = requestApi(config)

  return response;
}

const findAll = () => {
  const config = {
    withCredentials: true,
    url: "/users/users",
  }

  const response = requestApi(config)

  return response;
}

export { findMe, findAll };
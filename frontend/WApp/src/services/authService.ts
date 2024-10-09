import { CLIENT_ID, CLIENT_SECRET } from '../utils/system'
import { requestApi } from '../utils/request'
import { AxiosRequestConfig } from 'axios'
import { Credentials } from '../models/auth'
import { save, remove, get } from '../localStorage/accessTokenRepository'


export function loginRequest(loginData: Credentials){
  const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
  }

  const requestBody = new URLSearchParams()
  requestBody.append("username", loginData.username)
  requestBody.append("password", loginData.password)
  requestBody.append("grant_type", "password")

  const config : AxiosRequestConfig = {
      method: "POST",
      url: "/users/oauth2/token",
      data: requestBody,
      headers: headers
  }
  
  const response = requestApi(config)
  return response
}

export const logout = () => {
  remove()
}

export const saveAccessToken = (accessToken: string) => {
  save(accessToken)
}

export const getAccessToken = () => {
  get()
}
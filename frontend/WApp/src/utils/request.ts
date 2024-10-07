import axios, { AxiosRequestConfig } from 'axios'
import { BASE_URL } from './system'
import { getAccessToken } from '../services/authService'
import { history } from './history'

export const requestApi = (config: AxiosRequestConfig) => {

  const headers = config.withCredentials 
  ? {
    ...config.headers,
    "Authorization": `Bearer ${getAccessToken()}`
  } 
  : {
    ...config.headers
  }

  return axios({ ...config, baseURL: BASE_URL, headers})
}

axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      history.push('/login')
    }
    if (error.response.status === 403) {
      history.push('/dashboard')
    }
    return Promise.reject(error)
  }
)
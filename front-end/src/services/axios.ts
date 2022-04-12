import axios from "axios";

export function getAPIClient(ctx?: any) {

  const api = axios.create({
    baseURL: 'http://localhost:4300'
  })

  api.interceptors.request.use(config => {
    return config;
  })

  return api;
}
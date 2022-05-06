import axios from "axios"

export function getAPIClient(_ctx?: any) {
  const api = axios.create({
    baseURL: "http://localhost:4500",
  })
  
  api.interceptors.request.use((config) => {
    return config
  })

  return api
}

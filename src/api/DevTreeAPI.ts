import { isAxiosError } from "axios"
import api from "../config/axios"
import type { User } from "../types"

export async function getUser() {
    const token = localStorage.getItem('AUTH_TOKEN')
    try {
      const {data} = await api<User>(`/user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      })
      return data
    } catch (error) {
      if(isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error)
      }
    }
}
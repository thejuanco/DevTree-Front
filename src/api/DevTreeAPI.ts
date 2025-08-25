import { isAxiosError } from "axios"
import api from "../config/axios"
import type { ProfileForm, User } from "../types"

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

export async function updateProfile(formData : ProfileForm) {
    try {
      const {data} = await api.patch<string>(`/user`, formData)
      return data
    } catch (error) {
      if(isAxiosError(error) && error.response) {
        throw new Error(error.response.data.error)
      }
    }
}
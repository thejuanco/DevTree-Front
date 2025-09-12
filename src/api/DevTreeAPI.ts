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

export async function updateProfile(formData : User) {
    try {
      const {data} = await api.patch<string>(`/user`, formData)
      return data
    } catch (error) {
      if(isAxiosError(error) && error.response) {
        console.log(error.response.data)
        throw new Error(error.response.data.error)
      }
    }
}

export async function uploadImage(file : File) {
  //No se envia el archivo completo se crea un objeto formData
  let formData = new FormData()
  formData.append('file', file)

  try {
      const {data} = await api.post('/user/image', formData)
      return data
    } catch (error) {
      if(isAxiosError(error) && error.response) {
        console.log(error.response.data)
        throw new Error(error.response.data.error)
      }
    }
}

export async function getUserByHandle(handle : string) {
    try {
      const {data} = await api(`/${handle}`)
      return data
    } catch (error) {
      if(isAxiosError(error) && error.response) {
        console.log(error.response.data)
        throw new Error(error.response.data.error)
      }
    }
}

import { useState, useEffect } from "react"
import { social } from "../data/social"
import DevTreeInput from "../components/DevTreeInput"
import { isValidUrl } from "../utils"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "../api/DevTreeAPI"
import type { SocialNetwork, User } from "../types"

export default function LinkTreeView () {

  const [devTreeLinks, setDevTreeLinks] = useState(social)

  const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map(link => link.name == e.target.name ? { ...link, url: e.target.value } : link)
    setDevTreeLinks(updatedLinks)

    //Actualiza los datos cacheados
    // queryClient.setQueryData(['user'], (prevData: User) => {
    //   return {
    //     ...prevData,
    //     links: JSON.stringify(updatedLinks)
    //   }
    // })
  }

  const queryClient = useQueryClient()
  const user : User = queryClient.getQueryData(['user'])!
  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Actualizado correctamente")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  useEffect(() => {
    //Obtiene los links
    const updatedData = devTreeLinks.map(item => {
      //Los convierte en arreglo y retorna los elementos
      const userLink = JSON.parse(user.links).find((link: SocialNetwork ) => link.name === item.name)
      //Asigna los valores de la url de la base al usuario
      if (userLink) {
        return {
          ...item, url: userLink.url, enabled: userLink.enabled
        }
      }
      return item
    })
    //Actualiza el state
    setDevTreeLinks(updatedData)
  }, [])

  //Conocer la extension de los links almacenados
  const links : SocialNetwork[] = JSON.parse(user.links)

  const handleEnableLink = (socialNetwork : string) => {
    const updatedLinks = devTreeLinks.map(link => {
      if(link.name === socialNetwork){
        if(isValidUrl(link.url)){
          return {...link, enabled: !link.enabled} 
        }else {
          toast.error("Url no válida");
        }
      }
      return link
    })
    setDevTreeLinks(updatedLinks)

    let updatedItems : SocialNetwork[] = []

    const selectedSocialNetwork = updatedLinks.find(link => link.name === socialNetwork)
    if(selectedSocialNetwork?.enabled){
      const newItem = {
        ...selectedSocialNetwork,
        id: links.length + 1
      }
      updatedItems = [...links, newItem]
    } else {
      const indexToUpdate = links.filter(link => link.name === socialNetwork)
      updatedItems = links.map(link => {
        if(link.name === socialNetwork){
          return {
            ...link,
            id: 0,
            enabled: false
          }
        } else if(link.id > indexToUpdate.length){
          return {
            ...link,
            id: link.id - 1
          }
        }
        else {
          return link
        }
      })
      console.log(indexToUpdate)
    }

    console.log(updatedItems)

    //Actualiza los datos cacheados y almancena en la base de datos
    queryClient.setQueryData(['user'], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedItems)
      }
    })
  }

  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map(item => (
          <DevTreeInput
            key={item.name}
            item={item}
            handleUrlChange={handleUrlChange}
            handleEnableLink={handleEnableLink}
          />
        ))}
        <button 
          className="bg-cyan-500 p-2 text-lg w-full uppercase font-bold rounded-lg hover:bg-cyan-400"
          onClick={() => mutate(user)}
        >Guardar cambios</button>
      </div>
    </>
  )
}
import { useState } from "react"
import { social } from "../data/social"
import DevTreeInput from "../components/DevTreeInput"
import { isValidUrl } from "../utils"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { updateProfile } from "../api/DevTreeAPI"

export default function LinkTreeView () {

  const [devTreeLinks, setDevTreeLinks] = useState(social)

  const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map(link => link.name == e.target.name ? { ...link, url: e.target.value } : link)
    setDevTreeLinks(updatedLinks)
  }

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success("Actualizado correctamente")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

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
        <button className="bg-cyan-500 p-2 text-lg w-full uppercase font-bold rounded-lg hover:bg-cyan-400">Guardar cambios</button>
      </div>
    </>
  )
}
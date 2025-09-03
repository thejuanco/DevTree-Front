import { useState } from "react"
import { social } from "../data/social"
import DevTreeInput from "../components/DevTreeInput"

export default function LinkTreeView () {

  const [devTreeLinks, setDevTreeLinks] = useState(social)

  return (
    <>
      <div className="space-y-5">
        {devTreeLinks.map(item => (
          <DevTreeInput
            key={item.name}
            item={item}
          />
        ))}
      </div>
    </>
  )
}
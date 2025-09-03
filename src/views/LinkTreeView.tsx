import { useState } from "react"
import { social } from "../data/social"

export default function LinkTreeView () {

  const [devTreeLinks, setDevTreeLinks] = useState(social)
  
  return (
    <div>LinkTreeView</div>
  )
}
import { Navigate, useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getUserByHandle } from "../api/DevTreeAPI"

export default function HandleView() {
  const params = useParams()
  const handle = params.handle!
  const {data, error, isLoading} = useQuery({
    queryFn: () => getUserByHandle(handle),
    queryKey: ['handle', handle],
    retry: 1
  })

  if(isLoading) return <p className="font-bold text-white text-center">Cargando...</p>
  if(error) return <Navigate to={'/404'} />

  return (
    <div>HandleView</div>
  )
}

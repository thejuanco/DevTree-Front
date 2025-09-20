import {type UserHandle} from "../types"

type HandleDataProps = {
    data: UserHandle
}

export default function HandleData({data} : HandleDataProps) {
  return (
    <div className="space-y-6 text-white">
      <p className="text-5xl text-center font-black">{data.handle}</p>
      {data.image && <img src={data.image} className="max-w-[250px] mx-auto"/>}

      <p className="text-lg text-center font-bold">{data.description}</p>
    </div>
  )
}

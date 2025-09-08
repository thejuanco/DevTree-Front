import type { SocialNetwork } from "../types"

type DevTreeProps = {
    link: SocialNetwork
}

export default function DevTreeLink({ link }: DevTreeProps) {
    return (
        <li className="bg-gray-100 px-5 py-2 flex items-center gap-5 rounded-lg">
            <div
                className="w-12 h-12 bg-cover"
                style={{ backgroundImage: `url('/social/icon_${link.name}.svg')` }}
            ></div>
            <p className="capitalize">Visita mi: <span className="font-semibold">{link.name}</span></p>
        </li>
    )
}

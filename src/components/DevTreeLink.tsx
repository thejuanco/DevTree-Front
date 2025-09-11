import type { SocialNetwork } from "../types"
import { CSS } from "@dnd-kit/utilities"
import { useSortable } from "@dnd-kit/sortable"

type DevTreeProps = {
    link: SocialNetwork
}

export default function DevTreeLink({ link }: DevTreeProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: link.id
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <li 
            ref={setNodeRef}
            className="bg-gray-100 px-5 py-2 flex items-center gap-5 rounded-lg"
            style={style}
            {...attributes}
            {...listeners}
        >
            <div
                className="w-12 h-12 bg-cover"
                style={{ backgroundImage: `url('/social/icon_${link.name}.svg')` }}
            ></div>
            <p className="capitalize">Visita mi: <span className="font-semibold">{link.name}</span></p>
        </li>
    )
}

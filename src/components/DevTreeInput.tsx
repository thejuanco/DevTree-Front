import type { DevTreeLink } from "../types"

type DevTreeInputProps = {
    item: DevTreeLink
}

export default function DevTreeInput({ item }: DevTreeInputProps) {
    return (
        <div className="bg-white shadow-sm flex p-5 items-center gap-3 rounded-md">
            <div 
                className="w-12 h-12 bg-cover" 
                style={{ backgroundImage: `url('/social/icon_${item.name}.svg')` }}
            ></div>
            <input
                type="text"
                className="flex-1 border border-gray-100 rounded-lg"
            />
        </div>
    )
}

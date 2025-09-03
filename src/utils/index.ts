//Clases proporcionadas por la documentacion de hadlessui
export function classNames(...classes : string[]) {
    return classes.filter(Boolean).join(' ')
}

export function isValidUrl(url: string){
    try {
        new URL(url)
        return true
    } catch (error) {
        return false        
    }
}
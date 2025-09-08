export type User = {
    handle: string
    name: string
    email: string
    password: string
    description: string
    image: string
    links: string
}

//Heredando los atributos del User
export type RegisterForm = Pick<User, 'handle' | 'email' | 'name'> & {
    password: string,
    password_confirmation: string
}

export type LoginForm = Pick<User, 'email'> & {
    password: string
}

export type ProfileForm = Pick<User, 'handle' | 'description'>

export type SocialNetwork = {
    id: number
    name: string
    url: string
    enabled: boolean
}

export type DevTreeLink = Pick<SocialNetwork, 'name' | 'url' | 'enabled'>
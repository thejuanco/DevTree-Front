export type User = {
    handle: string,
    name: string,
    email: string,
    password: string,
    description: string
}

//Heredando los atributos del User
export type RegisterForm = Pick<User, 'handle' | 'email' | 'name'> & {
    password: string,
    password_confirmation: string
}

export type LoginForm = Pick<User, 'email'> & {
    password: string
}
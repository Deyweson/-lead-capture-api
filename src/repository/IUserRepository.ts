export interface User {
    id?: string,
    name: string,
    email: string,
    tell: string,
    newsletter: boolean
}




export interface IUserRepository {
    RegisterUser(user: User): Promise<User | null>
    FindUserByEmail(email: string): Promise<User | null>
}
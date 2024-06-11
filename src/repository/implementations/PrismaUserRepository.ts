import { prisma } from "../../lib/prisma";
import { IUserRepository, User } from "../IUserRepository";

export class PrismaUserRepository implements IUserRepository {
    async RegisterUser(user: User) {
        const newUser = await prisma.users.create({
            data: {
                name: user.name,
                email: user.email,
                tell: user.tell,
                newsletter: user.newsletter
            }
        })

        return newUser;
    }
    async FindUserByEmail(email: string) {
        const user = await prisma.users.findFirst({ where: { email } })
        return user
    }

}
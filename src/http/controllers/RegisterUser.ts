import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { RegisterUserUseCase } from "../../UseCases/RegisterUser";
import { PrismaUserRepository } from "../../repository/implementations/PrismaUserRepository";
import { EmailAlreadyInUse } from "../../UseCases/Errors/EmailAlreadyInUse";


export async function RegisterUser(request: FastifyRequest, reply: FastifyReply) {

    const userInfosSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        tell: z.string(),
        newsletter: z.boolean()
    })

    const user = userInfosSchema.parse(request.body)

    try {
        const registerUserUseCase = new RegisterUserUseCase(new PrismaUserRepository())
        registerUserUseCase.Execute(user)
    } catch (err) {
        if (err instanceof EmailAlreadyInUse) {
            return reply.status(400).send()
        }
    }

    return reply.status(201).send()
}
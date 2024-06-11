import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { RegisterUserUseCase } from "../../UseCases/RegisterUser";
import { PrismaUserRepository } from "../../repository/implementations/PrismaUserRepository";
import { UserAlredyExistsError } from "../../UseCases/Errors/UserAlreadyExistsError";

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
        await registerUserUseCase.Execute(user)
    } catch (error) {
        if (error instanceof UserAlredyExistsError) {
            return reply.status(400).send({ message: error.message })
        }
    }

    return reply.status(201).send()
}
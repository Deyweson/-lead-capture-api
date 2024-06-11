import { EmailNotRegisteredError } from "../../UseCases/Errors/EmailNotRegisteredError";
import { SendMailAgainUseCase } from "@/UseCases/SendMailAgain";
import { PrismaUserRepository } from "@/repository/implementations/PrismaUserRepository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function SendMailAgain(request: FastifyRequest, reply: FastifyReply) {
    const emailSchema = z.object({
        email: z.string().email()
    })

    const { email } = emailSchema.parse(request.body)


    try {
        const sendMailAgainUseCase = new SendMailAgainUseCase(new PrismaUserRepository())
        await sendMailAgainUseCase.Execute(email);
    } catch (error) {
        if (error instanceof EmailNotRegisteredError) {
            return reply.status(400).send({ message: error.message })
        }
    }

    return reply.status(204).send()
}
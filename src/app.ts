import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";
import { Routes } from "./http/routes";


export const app = fastify()

app.register(Routes, {prefix: 'v1'})

app.setErrorHandler((error, _request, reply) => {
    if (error instanceof ZodError) {
        return reply
            .status(400)
            .send({ message: 'Validation error.', issues: error.format() })
    }
    console.log(error)
    return reply.status(500).send({ message: 'Internal server error' })
})

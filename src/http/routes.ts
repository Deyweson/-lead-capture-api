import { FastifyInstance } from "fastify";
import { RegisterUser } from "./controllers/RegisterUser";


export async function Routes(app: FastifyInstance) {
    app.post('/register', RegisterUser)
}
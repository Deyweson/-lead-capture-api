import { FastifyInstance } from "fastify";
import { RegisterUser } from "./controllers/RegisterUser";
import { SendMailAgain } from "./controllers/SendMailAgain";


export async function Routes(app: FastifyInstance) {
    app.post('/register', RegisterUser)
    app.post('/send-mail-again', SendMailAgain)
}
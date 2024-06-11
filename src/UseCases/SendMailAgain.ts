import { CreateEmail } from "@/utils/CreateEmail";
import { MailProvider } from "../mailProvider/mailProvider";
import { IUserRepository } from "../repository/IUserRepository";
import { EmailNotRegisteredError } from "./Errors/EmailNotRegisteredError";

export class SendMailAgainUseCase {

    constructor(private repository: IUserRepository) { }

    async Execute(email: string) {

        const user = await this.repository.FindUserByEmail(email)
        if (user === null) {
            throw new EmailNotRegisteredError();
        }

        const mail = new MailProvider();

        const message = CreateEmail(user.name)

        mail.sendMail(user.email, 'Test lead capture api', message)

    }

}
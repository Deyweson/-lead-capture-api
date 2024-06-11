import { MailProvider } from "../mailProvider/mailProvider";
import { UserAlredyExistsError } from "./Errors/UserAlreadyExistsError";
import { IUserRepository, User } from "../repository/IUserRepository";
import { CreateEmail } from "@/utils/CreateEmail";

export class RegisterUserUseCase {

    constructor(private repository: IUserRepository) { }

    async Execute(user: User) {

        const validateEmail = await this.repository.FindUserByEmail(user.email)
        if (validateEmail !== null) {
            throw new UserAlredyExistsError();
        }

        await this.repository.RegisterUser(user)

        const mail = new MailProvider();

        const message = CreateEmail(user.name)

        mail.sendMail(user.email, 'Test lead capture api', message)
    }

}
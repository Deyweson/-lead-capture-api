import { MailProvider } from "../mailProvider/mailProvider";
import { IUserRepository, User } from "../repository/IUserRepository";
import { EmailAlreadyInUse } from "./Errors/EmailAlreadyInUse";

export class RegisterUserUseCase {

    constructor(private repository: IUserRepository) { }

    async Execute(user: User) {

        const validateEmail = await this.repository.FindUserByEmail(user.email)
        console.log(validateEmail)
        if (validateEmail !== null) {
            throw new EmailAlreadyInUse();
        }

        // await this.repository.RegisterUser(user)


        const mail = new MailProvider();

        mail.sendMail(user.email, 'teste', '<h1>Teste</h1>')
        return
    }

}
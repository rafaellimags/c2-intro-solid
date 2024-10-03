import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const userAlreadyExists: User = this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error("This e-mail address is already taken.");
    }
    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };

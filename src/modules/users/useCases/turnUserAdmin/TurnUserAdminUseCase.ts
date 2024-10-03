import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user: User = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found for the requested user id.");
    }

    user.admin = true;
    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user: User = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User not found.");
    }
    return this.usersRepository.findById(user_id);
  }
}

export { ShowUserProfileUseCase };

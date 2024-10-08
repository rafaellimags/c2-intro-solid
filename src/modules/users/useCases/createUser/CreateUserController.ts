import { Response, Request } from "express";
import { User } from "modules/users/model/User";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { email, name } = request.body;
    let user: User;
    try {
      user = this.createUserUseCase.execute({ email, name });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    return response.status(201).json(user);
  }
}

export { CreateUserController };

import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const user_id: string = request.headers.user_id as string;
    let user: User[];
    try {
      user = this.listAllUsersUseCase.execute({ user_id });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    return response.json(user);
  }
}

export { ListAllUsersController };

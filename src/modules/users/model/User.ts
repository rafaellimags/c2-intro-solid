import { v4 as uuidV4, v4 } from "uuid";

class User {
  // Complete aqui
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(id?: string) {
    if (!this.id) {
      this.id = v4();
    } else {
      this.id = id;
    }
    this.admin = false;
  }
}

export { User };

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  status: string;

  constructor(id: number, name: string, username: string, email: string, status: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.status = status;
  }
}

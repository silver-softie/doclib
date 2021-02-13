export class User {
  name: string;
  username: string;
  email: string;
  status: string;

  constructor(name: string, username: string, email: string, status: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.status = status;
  }
}

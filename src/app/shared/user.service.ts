import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    new User('Brad', 'brad.moffat', 'brad@moffat.me.uk', 'active'),
    new User('Stuart', 'stuart.cluley', 'stuart.cluley@gmail.com', 'inactive')
  ];

  constructor() { }

  getUsers() {
    return this.users.slice();
  }

  setUserStatus(user: User, status: string) {
    this.users.find(u => u == user).status = status;
  }
}

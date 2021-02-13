import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    new User(0, 'Brad', 'brad.moffat', 'brad@moffat.me.uk', 'active'),
    new User(1, 'Stuart', 'stuart.cluley', 'stuart.cluley@gmail.com', 'active')
  ];

  constructor() { }

  getUsers() {
    return this.users.slice();
  }

  setUserStatus(user: User, status: string) {
    this.users.find(u => u == user).status = status;
  }
}

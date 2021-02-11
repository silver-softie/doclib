import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    new User('brad')
  ];


  constructor() { }

}

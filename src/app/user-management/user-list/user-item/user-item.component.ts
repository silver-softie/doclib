import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  activateUser(user: User) {
    this.userService.setUserStatus(user, 'active');
  }

  deactivateUser(user: User) {
    this.userService.setUserStatus(user, 'inactive');
  }
}

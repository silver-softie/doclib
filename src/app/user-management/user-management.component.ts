import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  providers: [UserService]
})
export class UserManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

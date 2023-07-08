import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../../models/userModel/user.model";
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnChanges{

  currentUser: User = {
    user_id: 0,
    user_name: '',
    user_mail: '',
    user_password: ''
  };

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUser("1")
  }

  ngOnChanges(changes: SimpleChanges): void {}

  getUser(id: string): void {
    this.userService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUser = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}

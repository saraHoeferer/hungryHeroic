import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService, private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.setIsHome(true)
  }
}

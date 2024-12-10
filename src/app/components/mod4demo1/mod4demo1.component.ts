import {Component} from '@angular/core';
import {Mod4demo1Service} from "../../services/mod4demo1.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-mod4demo1',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './mod4demo1.component.html',
  styleUrl: './mod4demo1.component.css'
})
export class Mod4demo1Component {

  public user? : any

  constructor(private authService: Mod4demo1Service) {
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  } //connecté ou non

  public login() {
    this.user = this.authService.login();
  }

  public logout() {
    this.authService.logout();
    this.user = this.authService.getUser();
  }
}

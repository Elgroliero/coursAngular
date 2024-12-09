import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";

import {registerLocaleData} from "@angular/common";
import localeFr from "@angular/common/locales/fr";
registerLocaleData(localeFr);

@Component({
  selector: 'app-mod3demo1',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    NgForOf,
    DatePipe
  ],
  templateUrl: './mod3demo1.component.html',
  styleUrl: './mod3demo1.component.css'
})
export class Mod3demo1Component {

  public name!: string;
  public users: string[] = [];
  public date! : Date

  ngOnInit() {
    this.resetName();
    this.date = new Date()

    // setTimeout(
    //   () => {
    //     this.name = "Michel"
    //   }, 5000
    // )
  }

  public addUser() {
    if (this.name) {
      this.users.push(this.name)
      this.resetName()
    }
  }

  public resetName() {
    this.name = '';
  }

  removeUser(user: string) {
    const index = this.users.indexOf(user)
    if (index != -1) {
      this.users.splice(index, 1)
    }
  }

  removeUser2(index: number) {
    this.users.splice(index, 1)
  }
}

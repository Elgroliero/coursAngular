import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-mod3demo1',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './mod3demo1.component.html',
  styleUrl: './mod3demo1.component.css'
})
export class Mod3demo1Component {

  public name! : string;

  ngOnInit(){
    this.resetName();

    // setTimeout(
    //   () => {
    //     this.name = "Michel"
    //   }, 5000
    // )
  }

  public resetName(){
    this.name = '';
  }

}

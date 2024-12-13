import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Mod3demo1Component} from "./components/mod3demo1/mod3demo1.component";
import {Mod4demo1Component} from "./components/mod4demo1/mod4demo1.component";
import {Mod6Component} from "./components/mod6/mod6.component";
import {Mod8Component} from "./components/mod8/mod8.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mod3demo1Component, Mod4demo1Component, Mod6Component, Mod8Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coursAngularCDA32';
}

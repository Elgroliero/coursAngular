import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Mod3demo1Component} from "./components/mod3demo1/mod3demo1.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mod3demo1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coursAngularCDA32';
}

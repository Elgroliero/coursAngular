import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router : Router) {
  }

  goToAbout() {
    this.router.navigate(['/about-us'])
  }

  goToDetail(id: number) {
    this.router.navigate(['/detail', id])
  }
}











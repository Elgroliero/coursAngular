import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mod2demo1',
  standalone: true,
  imports: [],
  templateUrl: './mod2demo1.component.html',
  styleUrl: './mod2demo1.component.css'
})
export class Mod2demo1Component implements OnInit {

  public username! : string;

  constructor() {
    console.log("Le composant est instancié !")
  }

  public changeName(){
    this.username = 'Patrick !';
  }

  public ngOnInit() {
    this.username = 'Michel !';
  }

  ngAfterViewInit() {
    console.log("La vue est chargée !")
  }

  ngOnDestroy() {
    console.log("Le composant est détruit !")
  }


}

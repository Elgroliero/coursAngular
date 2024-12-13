import {Component} from '@angular/core';
import {Mod8Service} from "../../services/mod8.service";
import {HttpClientModule} from "@angular/common/http";
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {Joke} from "../../models/joke";
import {Observable} from "rxjs";

@Component({
  selector: 'app-mod8',
  standalone: true,
  imports: [HttpClientModule, NgIf, JsonPipe, AsyncPipe],
  providers: [Mod8Service],
  templateUrl: './mod8.component.html',
  styleUrl: './mod8.component.css'
})
export class Mod8Component {

  public joke?: string
  public joke2?: Joke
  public joke3$?: Observable<Joke>
  public joke4? : string

  constructor(private chuckService: Mod8Service) {
    this.getJoke()
    this.getJoke2()
    this.getJoke3()
    this.getJoke4()
  }

  public getJoke() {
    this.chuckService.getJoke().subscribe(
      response => {this.joke = response}
    )
  }

  public getJoke2() {
    this.chuckService.getJoke2().subscribe(
      joke => {this.joke2 = joke}
    )
  }

  public getJoke3(){
    this.joke3$ = this.chuckService.getJoke3()
  }

  public getJoke4(){
   this.chuckService.getJoke4().subscribe(
     value => this.joke4 = value
   )
  }

























}

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Joke} from "../models/joke";
import {catchError, distinctUntilChanged, filter, map, of, retry, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Mod8Service {

  private readonly BASE_URL = "https://api.chucknorris.io/jokes"

  constructor(private http: HttpClient) {
  }


  public getJoke() {
    return this.http.get<string>(`${this.BASE_URL}/random`)
  }

  public getJoke2() {
    return this.http.get<Joke>(`${this.BASE_URL}/random`)
  }

  public getJoke3() {
    return this.http.get<Joke>(`${this.BASE_URL}/random`)
  }

  public getJoke4() {
    return this.http.get<{ value: string }>(`${this.BASE_URL}/random`).pipe(
      map(joke => joke.value),
      retry(2),
      catchError(error => {
        console.log(error)
        return of("Une erreur est survenue !")
      })
    )
  }


  public getJoke5() {
    return this.http.get<Joke>(`${this.BASE_URL}/random`).pipe(
      map(
        response => {
          //mapping manuel, je créé mon model manuellement
          return {
            value: response.value,
            id: response.id,
            iconUrl: response.icon_url
          } as Joke
        }
      ),
      //bien pour logger
      tap(joke => joke),
      //bloque le flux sur réponse identique
      distinctUntilChanged(),
      //permet de chainer les appels
      switchMap(
        joke => {
          return this.http.get<Joke>(`${this.BASE_URL}/random`)
        }
      )
    )
  }

  public getJoke6() {
    const params = new HttpParams().set('name', 'michel')
    //${this.BASE_URL}/random?name=michel
    return this.http.get<Joke>(`${this.BASE_URL}/random`, {params: params})
  }

  public addJoke() {
    const joke: Joke = {
      value: "New joke",
      id: "12345",
      iconUrl: 'url',
      icon_url: 'url'
    }
    return this.http.post<Joke>(`${this.BASE_URL}/random`, joke)
  }


}

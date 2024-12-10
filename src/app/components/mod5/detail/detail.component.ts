import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  public message: string | null = ''

  constructor(private activatedRoute: ActivatedRoute) {

    //paramMap pour les paramètres obligatoires
    if (this.activatedRoute.snapshot.paramMap.has('id')) {
      let id = this.activatedRoute.snapshot.paramMap.get('id')
      console.log(id)
    }
    //queryParamMap pour les paramètres optionnels
    if (this.activatedRoute.snapshot.queryParamMap.has('message')) {
      this.message = this.activatedRoute.snapshot.queryParamMap.get('message')
    }

  }


}

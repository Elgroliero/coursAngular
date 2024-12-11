import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-mod6',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FormsModule
  ],
  templateUrl: './mod6.component.html',
  styleUrl: './mod6.component.css'
})
export class Mod6Component implements OnInit {

  public form!: FormGroup
  public isSubmitted: boolean = false
  public username : string = ''

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('theo.neron@campus-eni.fr', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      birthdate: new FormControl(null, [Validators.required, this.dateValidator]),
      job: new FormControl('design'),
      newsletter: new FormControl(false),
      knowledge: new FormControl(5, [Validators.min(2), Validators.max(10)])
    });
  }

  public dateValidator(control: AbstractControl) {
    console.log(control)

    if (control && control.value) {
      if (new Date(control.value) > new Date()) {
        return {greaterThan: true}
      }
    }
    return null
  }

  onSubmit() {
    this.isSubmitted = true
//code exécuté lors de la soumission du formulaire
    if (this.form.valid) {
      //si c'est ok j'envoie à mon service/api
      console.log(this.form.value)
    } else {
      console.log("Formulaire non valide")

    }
  }

  doSomething(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    console.log(this.username)
  }
}

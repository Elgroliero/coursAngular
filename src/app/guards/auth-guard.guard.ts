import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {Mod4demo1Service} from "../services/mod4demo1.service";

export const authGuardGuard: CanActivateFn = (route, state) => {

  const authService = inject(Mod4demo1Service)
  const router = inject(Router)

  if (authService.getUser()) {
    return true;
  } else {
    router.navigate(['/detail', 123], {queryParams : {message : "Accès interdit !"}})
    return false;
  }


};

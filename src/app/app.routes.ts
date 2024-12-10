import {Routes} from '@angular/router';
import {HomeComponent} from "./components/mod5/home/home.component";
import {AboutComponent} from "./components/mod5/about/about.component";
import {DetailComponent} from "./components/mod5/detail/detail.component";
import {authGuardGuard} from "./guards/auth-guard.guard";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutComponent, canActivate : [authGuardGuard]},
  {path: 'detail/:id', component: DetailComponent}

];

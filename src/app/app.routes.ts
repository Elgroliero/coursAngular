import {Routes} from '@angular/router';
import {HomeComponent} from "./components/mod5/home/home.component";
import {AboutComponent} from "./components/mod5/about/about.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutComponent}
];

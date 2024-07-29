import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ComingSoonComponent} from "./pages/coming-soon/coming-soon.component";

export const routes: Routes = [  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'prefix'
},
  {
    path: 'home',
    component: HomePageComponent,
  },
  ];

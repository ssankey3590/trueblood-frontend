import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ServicesPageComponent} from "./pages/services-page/services-page.component";
import {TestPageComponent} from "./pages/test-page/test-page.component";

export const routes: Routes = [  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'prefix'
},
  {
    path: 'home',
    title: '',
    component: HomePageComponent,
  },
  {
    path: 'services',
    title: 'Services',
    component: ServicesPageComponent
  },
  {
    path: 'test',
    title: 'Test',
    component: TestPageComponent,
  }
  ];

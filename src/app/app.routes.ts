import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ServicesPageComponent} from "./pages/services-page/services-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

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
    path: 'contact',
    title: 'Contact',
    component: ContactPageComponent
  },
  {
    path: 'about',
    title: 'About',
    component: AboutPageComponent
  }
  ];

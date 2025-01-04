import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ServicesCardComponent} from "../../components/services-card/services-card.component";
import {PageTemplateComponent} from "../../components/page-template/page-template.component";
import {HeroComponent} from "../../components/hero/hero.component";
import {CITIES, City} from "../../interfaces/city.interface";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatButton,
    ServicesCardComponent,
    PageTemplateComponent,
    HeroComponent,
    RouterLink,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  protected readonly cities: City[] = CITIES;

}

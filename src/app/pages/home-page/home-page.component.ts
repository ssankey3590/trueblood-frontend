import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {ServicesCardComponent} from "../../components/services-card/services-card.component";
import {PageTemplateComponent} from "../../components/page-template/page-template.component";
import {HeroComponent} from "../../components/hero/hero.component";
import {CITIES, City} from "../../interfaces/city.interface";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardActions,
    MatButton,
    ServicesCardComponent,
    PageTemplateComponent,
    HeroComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  protected readonly cities: City[] = CITIES;

}

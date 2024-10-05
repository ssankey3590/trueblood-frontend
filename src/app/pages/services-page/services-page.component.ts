import { Component } from '@angular/core';
import {ServicesCardComponent} from "../../components/services-card/services-card.component";
import {PageTemplateComponent} from "../../components/page-template/page-template.component";
import {SERVICES} from "../../interfaces/service.interface";

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    ServicesCardComponent,
    PageTemplateComponent
  ],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {


  protected readonly services = SERVICES;
}

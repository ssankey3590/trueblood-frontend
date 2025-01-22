import { Component } from '@angular/core';
import {PageTemplateComponent} from "../../components/page-template/page-template.component";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {Service, SERVICES} from "../../interfaces/service.interface";
import {CITIES, City} from "../../interfaces/city.interface";
import {ContactFormComponent} from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    PageTemplateComponent,
    MatIcon,
    MatList,
    MatListItem,
    ContactFormComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  protected readonly services: Service[] = SERVICES;
  protected readonly cities: City[] = CITIES;

}

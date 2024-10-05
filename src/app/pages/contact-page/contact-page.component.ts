import { Component } from '@angular/core';
import {PageTemplateComponent} from "../../components/page-template/page-template.component";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {Service, SERVICES} from "../../interfaces/service.interface";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatInput} from "@angular/material/input";
import {CITIES, City} from "../../interfaces/city.interface";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    PageTemplateComponent,
    MatIcon,
    MatList,
    MatLabel,
    MatListItem,
    MatIconButton,
    MatButton,
    MatFormField,
    MatSelect,
    MatOption,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatInput
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  protected readonly services: Service[] = SERVICES;
  protected readonly cities: City[] = CITIES;

}

import { Component } from '@angular/core';
import {PageTemplateComponent} from "../../components/page-template/page-template.component";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {Services, SERVICES} from "../../interfaces/services.interface";

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
    MatOption
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  protected readonly services: Services[] = SERVICES;

}

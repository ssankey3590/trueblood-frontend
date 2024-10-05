import { Component } from '@angular/core';
import {PageTemplateComponent} from "../../components/page-template/page-template.component";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButton, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    PageTemplateComponent,
    MatIcon,
    MatList,
    MatListItem,
    MatIconButton,
    MatButton
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}

import { Component } from '@angular/core';
import {PageTemplateComponent} from "../../components/page-template/page-template.component";

@Component({
  selector: 'app-contact-page',
  standalone: true,
    imports: [
        PageTemplateComponent
    ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}

import { Component } from '@angular/core';
import {PageTemplateComponent} from "../../components/page-template/page-template.component";

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    PageTemplateComponent
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}

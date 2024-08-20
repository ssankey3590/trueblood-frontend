import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page-template',
  standalone: true,
  imports: [],
  templateUrl: './page-template.component.html',
  styleUrl: './page-template.component.scss'
})
export class PageTemplateComponent {
  @Input() title: string = '';

}

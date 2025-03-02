import {Component, Input} from '@angular/core';
import {MatCard,MatCardTitle, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatChip, MatChipListbox} from "@angular/material/chips";

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatChipListbox,
    MatChip
  ],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.scss'
})
export class ServicesCardComponent {
  @Input() serviceTitle: string | undefined;
  @Input() serviceDescription: string | undefined;
  @Input() keywordList: string[] | undefined;


}

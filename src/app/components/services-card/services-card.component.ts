import {Component, Input} from '@angular/core';
import {MatCard,MatCardTitle, MatCardContent, MatCardFooter, MatCardHeader} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatChip, MatChipListbox} from "@angular/material/chips";

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatList,
    MatListItem,
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

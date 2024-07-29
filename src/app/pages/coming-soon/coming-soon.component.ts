import { Component } from '@angular/core';
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [
    MatProgressBar,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardFooter
  ],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
  currentDate = new Date();
  targetDate = new Date('August 17, 2024 00:00:00');
  diff = this.targetDate.getTime() - this.currentDate.getTime();
  siteProgress: number = 100 - ((Math.ceil(Math.abs(this.diff)/(1000*3600*24))) / 20 * 100);

}

import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  /** The URL of the background image */
  @Input() backgroundImage: string = '';

  /** The height of the hero section */
  @Input() height: string = '400px';

  /** Optional CSS classes for additional styling */
  @Input() customClass: string = '';
}

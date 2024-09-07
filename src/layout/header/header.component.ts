import { Component } from '@angular/core';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuContent, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatRipple} from "@angular/material/core";
import {NgOptimizedImage} from "@angular/common";

export const NAVIGATION_LINKS = [
  {
    title: "Home",
    route: "home",
  },
  {
    title: "About",
    route: "about",
  },
  {
    title: "Services",
    route: "services",
  },
  {
    title: "Contact",
    route: "contact",
  }
]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    MatIconButton,
    MatIcon,
    MatButton,
    MatMenuItem,
    RouterLink,
    RouterLinkActive,
    MatRipple,
    NgOptimizedImage,
    MatMenu,
    MatMenuTrigger,
    MatMenuContent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  protected readonly NAVIGATION_LINKS = NAVIGATION_LINKS;
}

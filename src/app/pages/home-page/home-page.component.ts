import {Component, HostListener, inject, OnInit} from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {PageTemplateComponent} from "../../components/page-template/page-template.component";
import {HeroComponent} from "../../components/hero/hero.component";
import {CITIES, City} from "../../interfaces/city.interface";
import {SERVICES, Service} from "../../interfaces/service.interface"
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatDialog} from "@angular/material/dialog";
import {InfoPopupComponent} from "../../components/info-popup/info-popup.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    PageTemplateComponent,
    HeroComponent,
    MatIcon,
    MatAnchor,
    MatListItem,
    MatList,
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  protected readonly cities: City[] = CITIES;
  protected readonly services: Service[] = SERVICES;
  readonly dialog = inject(MatDialog);
  serviceCols: number = 3;
  cityCols: number = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustCols(event.target.innerWidth);
  }

  ngOnInit() {
    this.adjustCols(window.innerWidth);
  }

  adjustCols(width: number) {
    if (width <= 640) {
      this.serviceCols = 1;
      this.cityCols = 1;
    } else if (width > 640 && width <= 1024) {
      this.serviceCols = 2;
      this.cityCols = 2;
    } else if (width > 1024 && width <= 1280) {
      this.serviceCols = 3;
      this.cityCols = 5;
    }
    else {
      this.serviceCols = 4;
      this.cityCols = 5;
    }
  }

  openService(service: Service) {
  let dialogRef = this.dialog.open(InfoPopupComponent);
  let instance = dialogRef.componentInstance;
  instance.title = service.name;
  instance.keywords = service.keywords;
  instance.message = service.description;
  }
}

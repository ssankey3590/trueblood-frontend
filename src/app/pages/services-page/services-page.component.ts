import { Component } from '@angular/core';
import {ServicesCardComponent} from "../../components/services-card/services-card.component";
import {PageTemplateComponent} from "../../components/page-template/page-template.component";
import {Services} from "../../interfaces/services.interface";

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    ServicesCardComponent,
    PageTemplateComponent
  ],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  services: Services[] = [
    {
      name: 'Furniture Assembly',
      description: '',
      keywords: ['Desks','Shelves','Chairs','Tables','Beds']
    },
    {
      name: 'Drywall Repair and Maintenance',
      description: '',
      keywords: ['Hole patching','Nail pops', 'Wallpaper removal']
    },
    {
      name: 'Minor Plumbing',
      description: '',
      keywords: ['Faucet leaks','Shower head installation','Faucet head installation','Caulking']
    },
    {
      name: 'Minor Electrical',
      description: '',
      keywords: ['Home security installation','Smoke detector upgrades / replacement','Carbon detector upgrades / replacement']
    },
    {
      name: 'Baby Proofing',
      description: '',
      keywords: ['Outlet covers', 'Safety locks', 'Baby gates', 'Anchoring furniture']
    },
    {
      name: 'Light Fixture Installation',
      description: '',
      keywords: ['Track lighting','Ceiling fans','Cabinet lighting', 'Recessed lighting']
    },
    {
      name: 'Pressure Washing',
      description: '',
      keywords: ['Decks','Stairs','Driveways','Exteriors']
    },
    {
      name: 'Smart Home Upgrades',
      description: '',
      keywords: ['Appliances','Doorbells','Thermostats']
    },
    {
      name: 'Fence and Gate Repair',
      description: '',
      keywords: ['Gate installation','Fence panels and posts repairs','Latch repairs','Decorative fences']
    },
    {
      name: 'Window Coverings',
      description: '',
      keywords: ['Blinds','Curtains']
    },
    {
      name: 'Door Hardware Installation',
      description: '',
      keywords: ['Doorknobs','Deadbolts','Locks','Door handles']
    },
    {
      name: 'Senior Home Upgrades',
      description: '',
      keywords: ['Walk-in tub','Grab bar installation','Stair lift installation']
    },
    {
      name: 'Gutter Cleaning',
      description: '',
      keywords: ['Debris removal','Clogs','Gutter repairs','Downspout cleaning']
    },
    {
      name: 'Window Washing',
      description: '',
      keywords: ['Two-story windows','Three-story windows','Ground floor windows']
    },
    {
      name: 'Screen Installation and Repair',
      description: '',
      keywords: ['Frame repairs','Tear patching','Screen replacement']
    },
    {
      name: 'Small Appliances Installation and Repair',
      description: '',
      keywords: ['Microwaves','Washing machines','Dryers','Dishwashers']
    },
    {
      name: 'Picture / TV Hanging and Installation',
      description: '',
      keywords: ['TV Mounting','Pictures','Mirrors','Paintings']
    },
  ];


}

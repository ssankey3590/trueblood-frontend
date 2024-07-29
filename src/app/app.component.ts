import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../layout/header/header.component";
import {FooterComponent} from "../layout/footer/footer.component";
import {BodyComponent} from "../layout/body/body.component";
import {ComingSoonComponent} from "./pages/coming-soon/coming-soon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BodyComponent, ComingSoonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TruebloodHandymanServices';
  siteComplete: boolean = false;
}

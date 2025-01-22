import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, TitleStrategy} from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {TemplatePageTitleStrategy} from "./title.strategy";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
    provideHttpClient()
  ]
};


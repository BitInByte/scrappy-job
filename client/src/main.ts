import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
// import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing';

bootstrapApplication(AppComponent, {
  providers: [
    // importProvidersFrom(BrowserModule, AppRoutingModule),
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));

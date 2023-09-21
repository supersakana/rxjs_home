/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from "./app/routes"
import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
  subdomain: 'nhfzfnbrqgppufcjkaqf',
  region: 'us-east-1'
})

bootstrapApplication(AppComponent,
    {providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig),
      { provide: nhost, useValue: nhost }
    ]})
  .catch(err => console.error(err));

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// provideHttpClient'ın yanına withFetch ekliyoruz:
import { provideHttpClient, withFetch } from '@angular/common/http'; 
// Hydration için bu import şart:
import { provideClientHydration } from '@angular/platform-browser'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()), // Artık hata vermeyecek!
  ]
};
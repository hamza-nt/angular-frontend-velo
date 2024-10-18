import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importer provideHttpClient


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Configuration du routeur, si nécessaire
    provideHttpClient() // Fournir HttpClient ici pour l'ensemble de l'application
  ]
})
.catch(err => console.error(err));
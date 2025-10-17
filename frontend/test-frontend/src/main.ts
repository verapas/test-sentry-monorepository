import { bootstrapApplication } from '@angular/platform-browser';
import * as Sentry from '@sentry/angular';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Sentry so früh wie möglich initialisieren
Sentry.init({
  dsn: 'http://ff29b072455da1d818536e56543d8b5c@localhost:9000/3',
  sendDefaultPii: true,
  tracesSampleRate: 1.0,
});

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

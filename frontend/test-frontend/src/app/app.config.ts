import {
  APP_INITIALIZER,
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { appRoutes } from './app.routes';
import * as Sentry from '@sentry/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    // Sentry: ErrorHandler + Tracing registrieren
    { provide: ErrorHandler, useValue: Sentry.createErrorHandler() },
    { provide: Sentry.TraceService, deps: [Router] },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
};

import { Component } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'test-frontend';

  public throwTestError(): void {
    throw new Error('Sentry Test Error');
  }

  public sendHandledError(): void {
    Sentry.captureException(new Error('Handled Sentry Test Error'));
  }
}

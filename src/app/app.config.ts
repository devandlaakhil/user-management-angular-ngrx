import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { usersReducer } from './store/users/users.reducer';
import { UsersEffects } from './store/users/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideStore({users:usersReducer}),
    provideEffects([UsersEffects]),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};

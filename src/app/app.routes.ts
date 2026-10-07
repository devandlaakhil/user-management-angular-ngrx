import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { UserList } from './users/user-list/user-list';
import { UserForm } from './users/user-form/user-form';
import { authGuard } from './auth/auth-guard';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'users',
        component: UserList,
        canActivate: [authGuard]
    },
    {
        path: 'users/add',
        component: UserForm,
        canActivate: [authGuard]
    },

    {
        path: 'users/edit/:id',
        component: UserForm,
        canActivate: [authGuard]
    }
];

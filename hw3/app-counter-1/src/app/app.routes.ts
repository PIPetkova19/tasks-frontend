import { Routes } from '@angular/router';
import { AppCounter } from './app-counter/app-counter';
import { AppListPeople } from './app-list-people/app-list-people';
import { AppProductCard } from './app-product-card/app-product-card';
import { AppProductPage } from './app-product-page/app-product-page';
import { AppRegistrationForm } from './app-registration-form/app-registration-form';
import { AppStudentList } from './app-student-list/app-student-list';

export const routes: Routes = [
    { path: '', component: AppCounter },
    { path: 'counter', component: AppCounter },
    { path: 'list-people', component: AppListPeople },
    { path: 'product-card', component: AppProductCard },
    { path: 'product-page', component: AppProductPage },
    { path: 'registration-form', component: AppRegistrationForm },
    { path: 'student-list', component: AppStudentList },
];

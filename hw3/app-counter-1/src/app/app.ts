import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCounter } from './app-counter/app-counter';
import { AppStudentList } from './app-student-list/app-student-list';
import { AppProductCard } from './app-product-card/app-product-card';
import { AppProductPage } from './app-product-page/app-product-page';
import { AppRegistrationForm } from './app-registration-form/app-registration-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, AppCounter, AppStudentList,AppProductCard,AppProductPage,AppRegistrationForm]
})
export class App {
  protected readonly title = signal('app-counter-1');
}

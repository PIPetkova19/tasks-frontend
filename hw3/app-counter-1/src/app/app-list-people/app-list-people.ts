import { Component } from '@angular/core';
import { InitialsPipe } from '../common/initials-pipe';

@Component({
  selector: 'app-list-people',
  templateUrl: './app-list-people.html',
  styleUrl: './app-list-people.css',
  imports: [InitialsPipe],
})
export class AppListPeople {
  people: string[] = [
    'Petya Petkova',
    'Rado Ivanov',
    'Ivan Ivanov'
  ];
}

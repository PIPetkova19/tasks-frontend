import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './app-counter.html',
  styleUrl: './app-counter.css',
})

export class AppCounter {
  counter: number = 0;

  increase() {
    if (this.counter < 10) this.counter++;
  }

  decrease() {
    if (this.counter > 0) this.counter--;
  }

  reset() {
    this.counter = 0;
  }
}

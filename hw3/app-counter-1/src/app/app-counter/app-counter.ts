import { Component, signal, computed } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-counter',
  imports: [MatButtonModule],
  templateUrl: './app-counter.html',
  styleUrl: './app-counter.css',
})

export class AppCounter {
  counter = signal<number>(0);

  status = computed(() => {
    if (this.counter() < 3) {
      return "Low";
    }
    else if (this.counter() <= 6) {
      return "Medium";
    }
    else {
      return "High";
    }
  });

  increase() {
    if (this.counter() < 10) {
      this.counter.update(c => c + 1);
    }
  }

  decrease() {
    if (this.counter() > 0) {
      this.counter.update(c => c - 1);
    }
  }

  reset() {
    this.counter.set(0);
  }
}

import { Component, Input, signal } from '@angular/core';
import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})

export class TimerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() interval = 1000;

  seconds = signal(0);
  running = signal(false);
  private timerId: any;

  ngOnInit() { this.startTimer(); }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['interval'] && !changes['interval'].firstChange) {
      this.stopTimer();
      this.seconds.set(0);
      this.startTimer();
    }
  }

  ngOnDestroy() { this.stopTimer(); }

  private startTimer() {
    this.running.set(true);
    this.timerId = setInterval(() => this.seconds.update(s => s + 1), this.interval);
  }

  private stopTimer() {
    this.running.set(false);
    clearInterval(this.timerId);
  }
}






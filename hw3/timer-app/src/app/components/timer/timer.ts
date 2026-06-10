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

  seconds = signal<number>(0);
  running = signal<boolean>(false);
  private timerId: number = 0;

  ngOnInit() { this.startTimer(); }

  ngOnChanges(changes: SimpleChanges) {//kogato se promeni nqkoi input
    if (changes['interval'] && !changes['interval'].firstChange) { //proverqva dali interval e bil promenen
      this.stopTimer();
      this.seconds.set(0);
      this.startTimer();
    }
  }
  /*changes['interval']  : previousValue: 1000, currentValue: 500,firstChange: false */

  ngOnDestroy() { this.stopTimer(); }

  private startTimer(): void {
    this.running.set(true);
    this.timerId = setInterval(() => this.seconds.update(s => s + 1), this.interval);//izvikva funk prez opredeleno vr
  }

  private stopTimer(): void {
    this.running.set(false);
    clearInterval(this.timerId);
  }
}






import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from '../timer/timer';
@Component({
  selector: 'app-parent',
  imports: [FormsModule,TimerComponent],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})

export class ParentComponent {
  show = signal(false);
  intervalMs = 1000;
}

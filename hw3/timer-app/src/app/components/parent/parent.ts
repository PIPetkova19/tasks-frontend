import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from '../timer/timer';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.html',
  styleUrl: './parent.css',
  imports: [FormsModule, TimerComponent, MatButtonModule,
    MatFormFieldModule, MatInputModule
  ],
})

export class ParentComponent {
  show = signal<boolean>(false);
  intervalMs: number = 1000;
}

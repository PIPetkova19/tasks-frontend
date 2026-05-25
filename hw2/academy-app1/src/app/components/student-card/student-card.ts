import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-card',
  imports: [CommonModule],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})

export class StudentCard {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() skills: string[] = [];
  @Input() description: string = '';

  showDesc: boolean = false;

  @Output() removed = new EventEmitter<string>();

  toggleButton(): void {
    this.showDesc = !this.showDesc;
  }

  removeStudent(): void {
    this.removed.emit(this.name);
  }
}

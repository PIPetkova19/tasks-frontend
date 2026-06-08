import { Component, inject, signal } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.html',
  styleUrl: './form-array.css',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatDividerModule, MatCardModule
  ],

})

export class FormArrayComponent {
  roles = ['Developer', 'Designer', 'Manager', 'Tester'];

  submittedTeam: { teamName: string; members: { name: string; role: string }[] } | null = null;

  form = new FormGroup({
    teamName: new FormControl('', Validators.required),
    members: new FormArray([this.createMember()])
  });

  get members() {
    return this.form.get('members') as FormArray;
  }

  createMember(): FormGroup {
    return new FormGroup({
      name: new FormControl<string>('', Validators.required),
      role: new FormControl<string>('', Validators.required)
    });
  }

  addMember() {
    this.members.push(this.createMember());
  }

  removeMember(index: number) {
    this.members.removeAt(index);
    if (this.submittedTeam) {
      this.submittedTeam = {
        ...this.submittedTeam,
        members: this.submittedTeam.members.filter((_, i) => i !== index)
      };
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.submittedTeam = this.form.value as {
        teamName: string;
        members: { name: string; role: string }[];
      };
    }
  }
}
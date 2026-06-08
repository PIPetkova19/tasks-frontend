import { Component, inject, signal } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.html',
  styleUrl: './form-array.css',
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
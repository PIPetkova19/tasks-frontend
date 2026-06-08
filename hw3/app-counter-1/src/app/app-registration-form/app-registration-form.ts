import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app-registration-form.html',
  styleUrl: './app-registration-form.css',
})

export class AppRegistrationForm {
  userForm!: FormGroup;
  successMsg = '';

  constructor(private formBuilder: FormBuilder) { }

  passwordMatch(ctrl: AbstractControl): ValidationErrors | null {
    const pw = ctrl.get('password')?.value;
    const cpw = ctrl.get('confirmPassword')?.value;
    return pw === cpw ? null : { mismatch: true };
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validators: this.passwordMatch
      });
  }

  submitForm(): void {
    if (this.userForm?.valid) {
      this.successMsg = this.userForm.value.username;
    }
  }
}

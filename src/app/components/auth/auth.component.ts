import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateWhitespace } from 'src/app/utilities/validators';
import { AuthDTO } from 'src/app/models/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.authForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email, validateWhitespace]),
      password: this.fb.control('', [Validators.required, validateWhitespace])
    });
  }

  login() {
    const val = this.authForm.getRawValue() as AuthDTO;
    console.log(val);
  }

}

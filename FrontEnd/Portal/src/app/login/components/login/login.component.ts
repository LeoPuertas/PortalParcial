import { LoginResourceService } from './../../api/services/login-resource.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  info: FormGroup;
  submitted: boolean = false;

  constructor(private _fb: FormBuilder, private _service: LoginResourceService, private _route: Router) { }

  ngOnInit(): void {
    this.info = this._fb.group({
      correo: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      clave: ['', [Validators.required, Validators.maxLength(32)]]
    });
  }

  aceptar(): void {
    this.submitted = true;
    if (this.info.valid) {
      this._service.login(this.info.value).subscribe((token: string) => {
        if (token != null) {
          localStorage.setItem('token', token);
          this._route.navigate(['/main']);
        }
      },
      (err) => {
        console.log(err);
      });
    }
  }

  get form(): any {
    return this.info.controls;
  }
}

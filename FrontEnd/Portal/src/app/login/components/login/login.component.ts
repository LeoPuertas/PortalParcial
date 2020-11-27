import { IMessage } from './../../../core/models/i-message';
import { LoginResourceService } from './../../api/services/login-resource.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageDialogComponent } from 'src/app/core/layout/message-dialog/message-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  info: FormGroup;
  submitted: boolean = false;

  constructor(private _fb: FormBuilder, private _service: LoginResourceService, private _route: Router, private _modal: NgbModal) { }

  ngOnInit(): void {
    this.info = this._fb.group({
      correo: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      clave: ['', [Validators.required, Validators.maxLength(32)]]
    });
  }

  loguear(): void {
    this.submitted = true;
    if (this.info.valid) {
      this._service.login(this.info.value).subscribe((token: string) => {
        if (token.length) {
          localStorage.setItem('token', token);
          this._route.navigate(['/main']);
        }
        else {
          const mensajeError: IMessage = {
            text:  'El correo o clave son incorrectos',
            title: 'Error al loguear'
          };
          const modal = this._modal.open(MessageDialogComponent);
          modal.componentInstance.message = mensajeError;
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

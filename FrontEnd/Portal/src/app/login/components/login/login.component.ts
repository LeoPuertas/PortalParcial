import { LoginResourceService } from './../../api/services/login-resource.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  info: FormGroup;
  submitted = false;
  token: string;

  constructor(private _fb: FormBuilder, private _service: LoginResourceService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.info = this._fb.group({
      correo: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      clave: ['', [Validators.required, Validators.maxLength(32)]]
    });
  }

  aceptar(): void {
    this.submitted = true;
    if (this.info.valid) {
      console.log(this.info.value);
      this._service.login(this.info.value).subscribe((token: string) => {
          console.log('token', token);
          this.token = token;
      });

      //console.log(this.token);
      //this.activeModal.close(this.info.value);
      this.activeModal.close(this.token);
    }
  }

}

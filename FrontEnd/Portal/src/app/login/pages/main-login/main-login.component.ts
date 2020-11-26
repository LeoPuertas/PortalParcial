import { LoginComponent } from './../../components/login/login.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})
export class MainLoginComponent implements OnInit {

  data: any;
  constructor(private _modal: NgbModal) { }

  ngOnInit(): void {
  }

  abrir(): void {
    this.data = null;
    const modalRef = this._modal.open(LoginComponent);

    modalRef.result.then((result: any) => {
            console.log('result', result);
            if (result) {
              this.data = result;
            }
          });
  }

}

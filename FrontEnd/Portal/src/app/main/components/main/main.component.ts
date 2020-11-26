import { IUsuario } from './../../api/models/i-usuario';
import { MainService } from './../../api/services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuario: IUsuario;
  constructor(private _service: MainService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(): void {
    var token = localStorage.getItem('token');
    if (token != null) {
      this._service.getUsuario().subscribe((usuario: IUsuario) => {
        console.log('usuario',usuario);
        this.usuario = usuario;
      },
      (err) => {
        console.log(err);
      });
    }
  }
}

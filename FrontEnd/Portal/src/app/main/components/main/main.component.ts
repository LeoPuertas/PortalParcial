import { IUsuario } from './../../api/models/i-usuario';
import { MainService } from './../../api/services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuario = { nombre: '', apellido: '', correo: ''} as IUsuario;
  constructor(private _service: MainService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(): void {
    const token = localStorage.getItem('token');
    if (token != null) {
      this._service.getUsuario().subscribe((usuario: IUsuario[]) => {
        if (usuario.length > 0)
        {
          this.usuario = usuario[0];
        }
      },
      (err) => {
        console.log(err);
      });
    }
  }
}

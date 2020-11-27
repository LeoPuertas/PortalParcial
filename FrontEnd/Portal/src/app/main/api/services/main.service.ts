import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceParams, ResourceRequestMethod, ResourceResponseBodyType } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../models/i-usuario';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}`
})
export class MainService extends Resource {

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/usuario',
    responseBodyType: ResourceResponseBodyType.Json
  })
  getUsuario: IResourceMethodObservable<void, IUsuario[]>;
}

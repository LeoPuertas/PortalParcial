import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceParams, ResourceRequestMethod, ResourceResponseBodyType } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}`
})
export class LoginResourceService extends Resource {

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/',
    responseBodyType: ResourceResponseBodyType.Text
  })
  login: IResourceMethodObservable<{correo: string, clave: string }, string>;
}

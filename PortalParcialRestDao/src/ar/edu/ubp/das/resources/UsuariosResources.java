package ar.edu.ubp.das.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import ar.edu.ubp.das.beans.UsuarioBean;
import ar.edu.ubp.das.beans.ValidarBean;
import ar.edu.ubp.das.db.Dao;
import ar.edu.ubp.das.db.DaoFactory;

@Path("/")
@Consumes(MediaType.APPLICATION_JSON)
public class UsuariosResources {
	
	@POST 
	@Produces(MediaType.TEXT_PLAIN)
	public Response getValidation(ValidarBean validar) { //enviamos un correo y una clave y nos retorna un token. 
		try {
			Dao<String, ValidarBean> dao = DaoFactory.getDao("Validar", "ar.edu.ubp.das");
			return Response.status(Response.Status.OK).entity(dao.insert(validar)).build();
		}
		catch (Exception ex){
			return Response.status(Response.Status.BAD_REQUEST).entity(ex.getMessage()).build();
		}
	}
	
	
	
	@GET
	@Path("/usuario")
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public Response getUsuario(@HeaderParam ("token") String token) {
		try {
			Dao<UsuarioBean, String> dao = DaoFactory.getDao("Usuarios", "ar.edu.ubp.das");
			return Response.status(Response.Status.OK).entity(dao.select(token.split(" ")[1])).build();
		}
		catch (Exception ex){
			return Response.status(Response.Status.BAD_REQUEST).entity(ex.getMessage()).build();
		}
	
	}
}

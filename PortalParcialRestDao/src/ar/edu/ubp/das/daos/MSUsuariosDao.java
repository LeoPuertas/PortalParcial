package ar.edu.ubp.das.daos;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import ar.edu.ubp.das.beans.UsuarioBean;
import ar.edu.ubp.das.db.Dao;

public class MSUsuariosDao extends Dao<UsuarioBean, String> {

	public MSUsuariosDao() {
		
	}

	@Override
	public UsuarioBean delete(String token) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UsuarioBean insert(String token) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UsuarioBean make(ResultSet result) throws SQLException {
		UsuarioBean usuario = new UsuarioBean();
		usuario.setApellido(result.getString("apellido"));
		usuario.setNombre(result.getString("nombre"));
		usuario.setCorreo(result.getString("correo"));
		//usuario.setNroPersona(result.getInt("nro_persona")); 
		return usuario;
	}

	@Override
	public List<UsuarioBean> select(String token) throws SQLException {
		try {
			this.connect();
			this.setProcedure("dbo.get_datos_usuario(?)");
			this.setParameter(1, token);
			return this.executeQuery();
		}
		finally {
			this.close();
		}
	}

	@Override
	public UsuarioBean update(String token) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean valid(String token) throws SQLException {
		// TODO Auto-generated method stub
		return false;
	}

}

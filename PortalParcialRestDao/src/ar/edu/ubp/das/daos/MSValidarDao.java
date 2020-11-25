package ar.edu.ubp.das.daos;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import ar.edu.ubp.das.beans.ValidarBean;
import ar.edu.ubp.das.db.Dao;

public class MSValidarDao extends Dao<String, ValidarBean> {

	public MSValidarDao() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String delete(ValidarBean arg0) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String insert(ValidarBean validar) throws SQLException {
		try {
			this.connect();
			this.setProcedure("dbo.val_usuario(?,?,?)");
			this.setParameter(1, validar.getCorreo());
			this.setParameter(2, validar.getClave());
			this.setOutParameter(3, java.sql.Types.NCHAR);
			this.execute();
			return this.getStringParam("token");
		}
		finally {
			this.close();
		}
		
	}

	@Override
	public String make(ResultSet arg0) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<String> select(ValidarBean arg0) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String update(ValidarBean arg0) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean valid(ValidarBean arg0) throws SQLException {
		// TODO Auto-generated method stub
		return false;
	}

}

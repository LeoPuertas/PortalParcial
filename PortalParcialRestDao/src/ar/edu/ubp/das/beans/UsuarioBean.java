package ar.edu.ubp.das.beans;

public class UsuarioBean {
	
	private String apellido;
	private String nombre;
	private String correo;
	//private int nroPersona;
	
	public UsuarioBean() {}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}
	
}

use das
go
-- drop table dbo.usuarios

/* ---------------------------------------
   Tabla: usuarios
   --------------------------------------- */
create table  dbo.usuarios
(
 nro_persona		integer				not null identity,
 apellido			varchar(40)			not null,
 nombre				varchar(255)		not null,
 correo				varchar(255)		not null,
 clave				varbinary(32)		not null,
 token				uniqueidentifier	not null default newid(),
 constraint PK__usuarios__END primary key(nro_persona),
 constraint UK__usuarios__1__END unique(correo)
);
go

declare @clave varchar(32) = 'admin2020',
        @crypt varbinary(32) 

set @crypt = hashbytes('sha1', @clave + replicate( '*', 32 - len(@clave)))

insert into dbo.usuarios(apellido, nombre, correo, clave)
values('PASTARINI', 'MARIELA', 'mpastarini@ubp.edu.ar', @crypt)
go

/* ---------------------------------------
   Procedimiento: val_usuario
   --------------------------------------- */
create or alter procedure dbo.val_usuario
(
 @correo	varchar(255),
 @clave		varchar(32),
 @token		char(36)		output
)
as
begin

  declare @crypt varbinary(32) 

  select @crypt  = hashbytes('sha1', @clave + replicate('*', 32 - len(@clave)))
  
  select @token = token
    from dbo.usuarios (nolock)
   where correo = @correo
     and clave  = @crypt

end
go

/*
declare @clave	varchar(32) = '2',
        @token	char(36)
		
execute dbo.val_usuario @correo='mpastarini@ubp.edu.ar', @clave=@clave, @token=@token output

select @token
*/

/* ---------------------------------------
   Procedimiento: get_datos_usuario
   --------------------------------------- */
create or alter procedure dbo.get_datos_usuario
(
 @token		char(36)
)
as
begin

  select apellido = upper(apellido),
         nombre   = upper(nombre),
		 correo   = lower(correo)
	from dbo.usuarios (nolock)
   where token = @token

end
go

-- execute dbo.get_datos_usuario @token='75D70A1D-1050-49E9-B42B-FBB073401646'

select  * from dbo.usuarios
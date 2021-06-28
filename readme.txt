Para hacer funcionar el proyecto es necesario hacer ciertos cambios
para conectar el frontend con el backend

>En el backend, dentro de la carpeta "backend" los datos para 
conectar con la base de datos esta en el archivo "db.php".

>En el frontend, en la carpeta "enviroment" en el archivo "enviroment.ts"
esta la  url que conecta los servicios del frontend con el backend 
y el nombre de la variable es "apiUrl".

La base de datos fue exportada desde mySQLWorkbech
Para la base de datos hay dos carpetas en el proyecto, ambas tienen la misma
base de datos pero de formas distintas

>La primera carpeta "baseDatosSQL (multiples archivos)" tiene la base de datos exportada en distintos
archivos SQL.

>La segunda carpeta "baseDatosSQL (un archivo)" tiene la base de datos exportada completa 
en un solo archivo SQL.

En el peor de los casos donde ninguna de las opciones funcione, 
escribo aqui el script de la base de datos mas los INSERT de 
los datos del administrador y de un cliente. 


CREATE DATABASE sistemareclamos;
use  sistemareclamos;
CREATE TABLE usuario (
    rut  varchar(50) not null unique ,
    nombre varchar(50),
    apellido varchar(50),
    residencia varchar(50),
    region varchar(50),
    comuna varchar(50),
    correo varchar(50) not null unique,
    cpassword varchar(50),
    tipo varchar(50),
    primary key (rut)
);
use sistemareclamos;
CREATE TABLE reclamo (
    id int NOT NULL UNIQUE auto_increment,
    rut varchar(50),
    categoria varchar(50),
    prioridad varchar(50),
    asunto varchar(50),
    descripcion varchar(200),
    estado varchar(50),
    respuesta varchar(200),
    primary key (id),
    foreign key (rut) references usuario(rut)
);
use sistemareclamos;
INSERT INTO usuario
VALUES ('10000-0', 'admin', 'administrador','Calle 34','valparaiso','Casablanca','admin@admin.com',md5('1234'),'administrador');

use sistemareclamos;
INSERT INTO usuario
VALUES ('3333-3', 'Esteban', 'Gonzales','Av Bienvenida 234','valparaiso','Casablanca','esteb@gmail.com',md5('dolphin'),'cliente');
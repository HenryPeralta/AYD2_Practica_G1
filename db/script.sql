CREATE DATABASE ayd2_practica;
USE ayd2_practica;

CREATE TABLE clientes (
    cui INT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    telefono VARCHAR(20),
    correo VARCHAR(50),
    edad INT,
    genero VARCHAR(25),
    fecha_ingreso DATE
);

CREATE TABLE citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cui INT,
    fecha DATE,
    hora TIME,
    FOREIGN KEY (cui) REFERENCES clientes(cui)
);

CREATE TABLE expedientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cui INT,
    codigo VARCHAR(50),
    archivo LONGBLOB,
    tipo_archivo ENUM('PDF', 'DOC', 'DOCX'),
    fecha_ingreso DATE,
    FOREIGN KEY (cui) REFERENCES clientes(cui)
);

CREATE TABLE estados_casos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    expediente_id INT NOT NULL,
    descripcion VARCHAR(100),
    fecha_actualizacion DATE,
    FOREIGN KEY (expediente_id) REFERENCES expedientes(id)
);
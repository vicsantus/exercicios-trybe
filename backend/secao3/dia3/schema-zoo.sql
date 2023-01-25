-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema zoo
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zoo
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS zoo;
CREATE SCHEMA IF NOT EXISTS zoo ;
USE zoo ;

-- -----------------------------------------------------
-- Table zoo.animal
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS zoo.animal (
    idanimal INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    especie VARCHAR(150) NOT NULL,
    sexo BINARY(2) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(255) NULL,
    PRIMARY KEY (idanimal)
)  ENGINE=INNODB;


-- -----------------------------------------------------
-- Table zoo.cuidadores
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS zoo.cuidadores (
    idcuidador INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    PRIMARY KEY (idcuidador)
)  ENGINE=INNODB;


-- -----------------------------------------------------
-- Table zoo.animal_cuidador
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS zoo.animal_cuidador (
    idanimal INTEGER,
    idcuidador INTEGER,
    CONSTRAINT PRIMARY KEY(idanimal, idcuidador),
    FOREIGN KEY (idanimal)
        REFERENCES animal (idanimal),
    FOREIGN KEY (idcuidador)
        REFERENCES cuidadores (idcuidador)
)  ENGINE=INNODB;


-- -----------------------------------------------------
-- Table zoo.gerentes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS zoo.gerentes (
    idgerentes INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    PRIMARY KEY (idgerentes)
)  ENGINE=INNODB;


-- -----------------------------------------------------
-- Table zoo.cuidadores_gerentes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS zoo.cuidadores_gerentes (
    idcuidador INTEGER,
    idgerentes INTEGER,
    CONSTRAINT PRIMARY KEY (idcuidador),
    FOREIGN KEY (idcuidador)
        REFERENCES cuidadores (idcuidador),
    FOREIGN KEY (idgerentes)
        REFERENCES gerentes (idgerentes)
)  ENGINE=INNODB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

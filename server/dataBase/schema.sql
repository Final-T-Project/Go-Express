-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id_user` VARCHAR(50) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `gender` ENUM('Male', 'Female') NULL,
  `adress` VARCHAR(200) NULL,
  `photo` VARCHAR(700) NULL,
  `phone_number` VARCHAR(8) NOT NULL,
  `ville` ENUM("Tunis", "Ariana", "Beja", "Ben Arous", "Bizerte", "Gabes", "Gafsa", "Jendouba", "Kairouan", "Kasserine", "kebili", "Kef", "Mahdia", "Manouba", "Medenine", "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", "Siliana", "Sousse", "Tataouine", "Touzeur", "Zaghouan") NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`employer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`employer` (
  `id_employer` VARCHAR(45) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `cv` VARCHAR(700) NOT NULL,
  `gender` ENUM("Male", "female") NOT NULL,
  `adress` VARCHAR(45) NOT NULL,
  `photo` VARCHAR(300) NOT NULL,
  `phone_number` VARCHAR(8) NOT NULL,
  `state` ENUM("Accepted", "Not Accepted") NOT NULL DEFAULT 'Not Accepted',
  PRIMARY KEY (`id_employer`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cart` (
  `id_cart` INT NOT NULL AUTO_INCREMENT,
  `payment_type` ENUM("Cash", "Bank Card") NOT NULL,
  `date` VARCHAR(25) NULL DEFAULT 'Null',
  `user_id_user` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_cart`),
  INDEX `fk_cart_user1_idx` (`user_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_cart_user1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `mydb`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`product` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `sellIerd` NVARCHAR(60) NULL DEFAULT 'Null',
  `buyerId` VARCHAR(60) NULL DEFAULT 'Null',
  `name` VARCHAR(45) NOT NULL,
  `category` ENUM("Kitshen", "Fourniture", "Garden furniture", "Accessories") NOT NULL,
  `price` INT NOT NULL,
  `photo` VARCHAR(300) NOT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  `user_id_user` VARCHAR(50) NOT NULL,
  `cart_id_cart` INT NOT NULL,
  PRIMARY KEY (`id_product`),
  INDEX `fk_product_user_idx` (`user_id_user` ASC) VISIBLE,
  INDEX `fk_product_cart1_idx` (`cart_id_cart` ASC) VISIBLE,
  CONSTRAINT `fk_product_user`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `mydb`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_cart1`
    FOREIGN KEY (`cart_id_cart`)
    REFERENCES `mydb`.`cart` (`id_cart`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`serves`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`serves` (
  `id_serves` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(20) NOT NULL,
  `price` INT NOT NULL,
  `description` TEXT(6000) NOT NULL,
  `user_id_user` VARCHAR(50) NOT NULL,
  `cart_id_cart` INT NOT NULL,
  PRIMARY KEY (`id_serves`),
  INDEX `fk_serves_user1_idx` (`user_id_user` ASC) VISIBLE,
  INDEX `fk_serves_cart1_idx` (`cart_id_cart` ASC) VISIBLE,
  CONSTRAINT `fk_serves_user1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `mydb`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_serves_cart1`
    FOREIGN KEY (`cart_id_cart`)
    REFERENCES `mydb`.`cart` (`id_cart`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`feedBack`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`feedBack` (
  `id_feedback` INT NOT NULL AUTO_INCREMENT,
  `etoile` ENUM("1", "2", "3", "4", "5") NOT NULL,
  `details` VARCHAR(400) NULL DEFAULT 0,
  `user_id_user` VARCHAR(50) NOT NULL,
  `serves_id_serves` INT NOT NULL,
  PRIMARY KEY (`id_feedback`),
  INDEX `fk_feedBack_user1_idx` (`user_id_user` ASC) VISIBLE,
  INDEX `fk_feedBack_serves1_idx` (`serves_id_serves` ASC) VISIBLE,
  CONSTRAINT `fk_feedBack_user1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `mydb`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_feedBack_serves1`
    FOREIGN KEY (`serves_id_serves`)
    REFERENCES `mydb`.`serves` (`id_serves`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`devi`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`devi` (
  `id_devi` INT NOT NULL AUTO_INCREMENT,
  `departureDestination` ENUM("Tunis", "Ariana", "Beja", "Ben Arous", "Bizerte", "Gabes", "Gafsa", "Jendouba", "Kairouan", "Kasserine", "kebili", "Kef", "Mahdia", "Manouba", "Medenine", "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", "Siliana", "Sousse", "Tataouine", "Touzeur", "Zaghouan") NOT NULL,
  `arrivalDestination` ENUM("Tunis", "Ariana", "Beja", "Ben Arous", "Bizerte", "Gabes", "Gafsa", "Jendouba", "Kairouan", "Kasserine", "kebili", "Kef", "Mahdia", "Manouba", "Medenine", "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", "Siliana", "Sousse", "Tataouine", "Touzeur", "Zaghouan") NOT NULL,
  `dismountType` ENUM("House", "Company") NOT NULL,
  `startingStage` ENUM("S+1", "S+2", "S+3", "Duplex", "Villa") NOT NULL,
  `arrivingStage` ENUM("S+1", "S+2", "S+3", "Duplex", "Villa") NOT NULL,
  `qestion` ENUM("Yes", "No") NOT NULL,
  `user_id_user` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_devi`),
  INDEX `fk_devi_user1_idx` (`user_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_devi_user1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `mydb`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`reservation`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reservation` (
  `id_reservation` INT NOT NULL AUTO_INCREMENT,
  `date` ENUM("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31") NOT NULL,
  `state` ENUM("Availabel", "Not Availabel") NULL,
  `user_id_user` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_reservation`),
  INDEX `fk_reservation_user1_idx` (`user_id_user` ASC) VISIBLE,
  CONSTRAINT `fk_reservation_user1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `mydb`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`historique`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`historique` (
  `id_historique` INT NOT NULL AUTO_INCREMENT,
  `user_id_user` VARCHAR(50) NOT NULL,
  `cart_id_cart` INT NOT NULL,
  PRIMARY KEY (`id_historique`),
  INDEX `fk_historique_user1_idx` (`user_id_user` ASC) VISIBLE,
  INDEX `fk_historique_cart1_idx` (`cart_id_cart` ASC) VISIBLE,
  CONSTRAINT `fk_historique_user1`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `mydb`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_historique_cart1`
    FOREIGN KEY (`cart_id_cart`)
    REFERENCES `mydb`.`cart` (`id_cart`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

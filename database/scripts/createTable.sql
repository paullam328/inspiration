CREATE TABLE `Inspiration`.`quote` (
  `id` INT NOT NULL,
  `value` VARCHAR(45) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `id`
    FOREIGN KEY (`user_id`)
    REFERENCES `Inspiration`.`user_credential` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

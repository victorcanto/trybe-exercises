USE BeeMovies;

DELIMITER $$

CREATE TRIGGER trigger_set_field_Value_release_year
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
  SET NEW.release_year = YEAR(NOW());
END $$

DELIMITER ;
USE betrybe_automoveis;

DELIMITER $$

CREATE TRIGGER setUpdateDate3
	AFTER DELETE ON betrybe_automoveis.log_operacoes
	FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
  VALUES ('EXCLUSÃO', DATE(NOW()));
END $$
	
DELIMITER ;
USE betrybe_automoveis;

DELIMITER $$

CREATE TRIGGER setUpdateDate2
	BEFORE UPDATE ON betrybe_automoveis.carros
	FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
	NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;
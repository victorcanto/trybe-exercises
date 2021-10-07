--Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT COUNT(Provider) AS qtd_providers FROM PiecesProviders.Provides WHERE Piece = 1;
// Selecione todas as transações feitas pelo cliente chamado "Dave America".
use('agg_example');
db.transactions.aggregate([{ $match: { from: 'Dave America' } }]);

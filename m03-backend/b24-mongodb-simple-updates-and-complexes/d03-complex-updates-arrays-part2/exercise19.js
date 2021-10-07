db.movies.find({ description: { $regex: /humanity.$/ } });

// source ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

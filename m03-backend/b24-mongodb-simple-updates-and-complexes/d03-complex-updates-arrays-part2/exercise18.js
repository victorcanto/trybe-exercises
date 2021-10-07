db.movies.find({ description: { $regex: /^The/ } });

// source ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

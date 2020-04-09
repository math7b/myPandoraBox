const express = require('express');

const app = express();

app.use(express(JSON));

app.get('/', function(request, response) {
    response.send('Hello Wolrd');
});

app.listen(3333);
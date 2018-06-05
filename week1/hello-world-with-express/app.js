const express = require('express'),
      app = express();


app.get('/', function (request, response) {
    response.send('Hello World!!!');
});

app.use(function (request, response) {
  response.sendStatus(404);
});

app.listen(3000, function () {
  console.log('Server is running on 3000');
});

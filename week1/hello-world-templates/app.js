const express = require('express'),
      app = express(),
      engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine','html');
app.set('views', __dirname+ '/views');

app.get('/', function (req, res) {
  res.render('hello', {'name':'Tejas'});
});

app.use(function () {
  res.sendStatus(404);
})

const server = app.listen(3000, function () {
  const port = server.address().port
  console.log('server is running on %s', port);
});

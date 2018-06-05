const express = require('express'),
      cons = require('consolidate'),
      app = express();


app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('html', __dirname + '/views');
// app.use(app.router)

// Handler for internal server error
function errorHandler(error, req, res, next) {
  console.log(error.message);
  console.log(error.stack);
  res.status(500);
  res.render('erorr_template', { error : error} );
}
app.use(errorHandler);

app.get('/:name', function (req, res) {
      let name = req.params.name;
      let getVar1 = req.query.getVar1;
      let getVar2 = req.query.getVar2;
      res.render('hello', {name : name, getVar1: getVar1, getVar2 : getVar2 });
  });

  app.use(function (req, res) {
    res.sendStatus(404);
  });

  const server = app.listen(3000, function () {
    const port = server.address().port;
    console.log('Server running on %s', port);
  })

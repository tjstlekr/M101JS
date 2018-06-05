const express = require('express'),
      mongoClient = require('mongodb').MongoClient,
      engines = require('consolidate'),
      app = express(),
      url = 'mongodb://localhost:27017/',
      dbName = 'college',
      collectionName = 'student',
      templateFileName = 'student';


app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('html', __dirname + '/views');


mongoClient.connect(url+dbName, function (error, db) {
  if (error) throw error;
  console.log('connection to MongoDB successfull');

  app.get('/', function (req, res) {
    db.collection(collectionName).find({}).toArray(function (error,docs) {
      if (error) throw error;
      res.render(templateFileName, {'student' : docs})
    })
  });

  app.use(function (req, res) {
    res.sendStatus(404);
  });

  const server = app.listen(3000, function () {
    const port = server.address().port;
    console.log('Server running on %s', port);
  })

})

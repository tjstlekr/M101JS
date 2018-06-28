const mongoClient = require('mongodb').MongoClient,
      assert = require('assert');



mongoClient.connect('mongodb://localhost:27017/crunchbase', function (error, db) {
  assert.equal(error, null);
  console.log('Connection to database Successfull');

  let cursor = db.collection('companies').find()

  cursor.forEach(
    function (doc) {
      console.log(doc.name + ' is a ' + doc.category_code + ' company.');
    },
    function (error) {
      assert.equal(error, null);
      return db.close();
    }
  )

})

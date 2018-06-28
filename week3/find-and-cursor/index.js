const mongoClient = require('mongodb').MongoClient,
      assert = require('assert'),
      url = 'mongodb://localhost:27017/crunchbase';

mongoClient.connect(url, function (error, db) {
  assert.equal(error, null);
  console.log('Successfully connected to MongoDB');

  const query = {"category_code": "biotech"}

  db.collection('companies').find(query).toArray(function (error, docs) {
    assert.notEqual(docs.length, 0);
    docs.forEach(function (doc) {
      console.log(doc.name + ' is a ' + doc.category_code + ' company.');
    });
    db.close();
  });
});

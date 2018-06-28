const mongoClient = require('mongodb').MongoClient,
      assert = require('assert');


mongoClient.connect('mongodb://localhost:27017/crunchbase', function (error, db) {
    assert.equal(error, null);
    console.log('Connection to database successfull');

    const query = {category_code : 'biotech'}
    const projection = {"name":1,  "category_code" : 1, _id: 0}
    let cursor = db.collection('companies').find(query);
    cursor.project(projection);
    cursor.forEach(
      function (doc) {
        // console.log(doc.name + ' is a ' + doc.category_code + ' company.');
        console.log(doc);
      }
    )
})

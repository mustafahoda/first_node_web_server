var Promise = require('bluebird');

var mongoClient = Promise.promisifyAll(require('mongodb')).MongoClient;

var url = 'mongodb://localhost/';
mongoClient.connectAsync('mongodb://localhost/')

  .then(function(client) {
    var db = client.db('EmployeesDB');
    return db.collection('Employee').findAsync({})

  })

  .then(function(cursor) {
      cursor.each(function(err, doc) {
          console.log(doc);
      })
  });

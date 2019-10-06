var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/';

MongoClient.connect(url, function(err, client){
  var db = client.db('EmployeesDB');
  var cursor = db.collection('Employee').find();

  cursor.each(function(err, doc){
    console.log(doc)
  })

  client.close()

});

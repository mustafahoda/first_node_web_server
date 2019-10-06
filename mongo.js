var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/"

MongoClient.connect(url, function(err, client){
  var db = client.db('EmployeesDB');
  var cursor = db.collection('Employee').find();

  cursor.each(function(err, item){
    console.log(item)
  });

  // db.collection('Employee').updateOne(
  //   {
  //     "Employee Name" : "Martin"
  //   },
  //   {$set:
  //     {
  //       "Employee Name": "Mohan"
  //     }
  //   }
  // );

  client.close();
});

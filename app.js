var express = require('express');

var app = express();
app.set('view engine', 'jade');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/';

var str = "";

app.route('/employeeid').get(function(req, res){
  MongoClient.connect(url, function(err, client){
    var db = client.db('EmployeesDB');
    var cursor = db.collection('Employee').find();


    cursor.each(function(err, item){
      // console.log(item)
      if(item != null){
        str = str + "&nbsp;&nbsp;&nbsp;&nbsp;Employee id&nbsp;&nbsp;" + item.Employeeid + "</br>";
      }
    });

    res.send(str);
    client.close()
  })
});

app.route('/Node').get(function(req, res)
{
  res.send("Tutorial on Node");
})

app.route('/Angular').get(function(req, res)
{
  res.send("Tutorial on Angular")
})

app.get('/', function(req, res){
  res.render('index',
    {title:'Guru99', message:'Welcome'}
  );
});

var server = app.listen(3000, function() {

})

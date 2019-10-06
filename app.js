var express = require('express');

var app = express();
app.set('view engine', 'jade');

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

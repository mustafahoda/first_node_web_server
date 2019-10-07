// Reading from a file
// var fs = require("fs");
//
// var stream;
// stream = fs.createReadStream("data.txt")
//
// stream.on("data", function(data){
//   var chunk = data.toString();
//
//   console.log(chunk);
// })


// Writing to a file
var fs = require("fs");

var stream;
stream = fs.createWriteStream("data.txt");

stream.write('Tutorial on Node.js')
stream.write("Introduction")
stream.write('LOL')

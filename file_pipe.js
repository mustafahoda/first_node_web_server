var fs = require("fs");
var readStream = fs.createReadStream("dataInput.txt");

var writeStream = fs.createWriteStream("dataOutput.txt");

readStream.pipe(writeStream);

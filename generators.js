function Timedelay(ptime, callback){
  setTimeout(function(){
    callback("Pausing for " + ptime);
  }, time)
}


Timedelay(1000, function(message){
  console.log(msg);
  Timedelay(2000, function(message){
    console.log(msg)
    Timedelay(3000, function(message){
      console.log(msg);
    });
  });
})

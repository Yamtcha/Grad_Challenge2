
var fetch = require('node-fetch');

function Fetch(x){ 
    var Add=0;

    for(let i=0 ; i < x ; i++){
    let initialTime = new Date().getTime();    
    fetch("http://date.jsontest.com")
         .then(function(res) {
          return res.json();
        }).then(function(json) {
           Add+=json.milliseconds_since_epoch - initialTime; 
        console.log(json);
       });
    }
    console.log("average request time is ",Add/x)
}

Fetch(2);


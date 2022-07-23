const fs = require("fs");
console.log("Before");

let f1Kapromise = fs.promises.readFile("f1.txt");
let f2Kapromise = fs.promises.readFile("f2.txt");

console.log(f1Kapromise);

f1Kapromise.then(function(data){
    console.log(data+"");
})

f1Kapromise.catch(function(error){
    console.log(error);
})

f2Kapromise.then(function(data){
    console.log(""+data);
})

f2Kapromise.catch(function(error){
    console.log(error);
})

console.log("After");
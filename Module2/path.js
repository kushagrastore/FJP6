///home/kushagra/Desktop/FJP6/"Module 2"/intro.js

// let path = require("path");
// // console.log(path);

// // let extensionName = path.extName("/home/kushagra/Desktop/FJP6/Module %20 2/intro.js");
// // console.log(extensionName);

// // console.log(__dirname);
// // console.log(__filename);

// let fs = require("fs");
// let filePath = path.join(__dirname+"file.txt");
// fs.writeFileSync(filePath,"Again");


// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content);

// fs.appendFileSync(filePath,"\nNew line");
// console.log("After Update");
// console.log(fs.readFileSync(filePath,'utf-8'));

// fs.unlinkSync(filePath);


let fs = require("fs");
let path = require("path");

if(!fs.existsSync("hamariDirectorySync"))
    fs.mkdirSync("hamariDirectorySync");

let folderPath = __dirname;

// let folderPath = "/home/kushagra/Desktop/FJP6/Module2";
let contentOfFolder = fs.readdirSync(folderPath);
console.log(contentOfFolder);

fs.rmdirSync("hamariDirectorySync");

let sourcePath = path.join(__dirname,"file.txt");
let destinationPath = path.join(__dirname,"module","file.txt");

console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);
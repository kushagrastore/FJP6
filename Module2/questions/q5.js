//move a file

let fs = require("fs");
let path = require("path")

let srcPath = path.join(__dirname,"..","file1.txt");
let destName = path.join(__dirname,"..","NewFolderQ3","file1.txt");

fs.copyFileSync(srcPath,destName);

fs.unlinkSync(srcPath);


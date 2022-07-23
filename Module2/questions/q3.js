//copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path")

let srcPath = path.join(__dirname,"..","..","Module1","index.html")

let fileKaPath = path.join(__dirname,"..","NewFolderQ3")

if(!fs.existsSync(fileKaPath))
    fs.mkdirSync(fileKaPath)

let destPath = path.join(fileKaPath,"index.html");

fs.copyFileSync(srcPath,destPath);
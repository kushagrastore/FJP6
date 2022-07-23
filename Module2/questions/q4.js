// read content of unorganised folder and make  an array which has extension name of each file


let fs = require("fs");
let path = require("path")
let folderPath = path.join(__dirname,"..","unorganise")
// console.log(folderPath)

let content = fs.readdirSync(folderPath)
console.log(content)

let extArr = [];
for(let i=0;i<content.length;i++){
    let name = content[i];
    let extName = path.extname(name)
    extArr.push(extName)
}
console.log(extArr)
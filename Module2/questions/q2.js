// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs")
let path = require("path")

let arr = ['audio','video','software','documents','applications','other']

let nameArr = ['abc','efg','xyz','def']

let extName = ['.mp3','.mp4','.exe','.pdf','.apk','.rar']

let OrganisePath = path.join(__dirname,"Organise")
if(!fs.existsSync(OrganisePath))
    fs.mkdirSync(OrganisePath)

for(let i=0;i<arr.length;i++){
    let folderKaPath = path.join(OrganisePath,arr[i]);
    if(!fs.existsSync(folderKaPath))
        fs.mkdirSync(folderKaPath)

    for(let j=0;j<nameArr.length;j++){
        let fileName = nameArr[j] + extName[i]
        let fileKaPath = path.join(folderKaPath,fileName)
        fs.writeFileSync(fileKaPath,"")
    }
}

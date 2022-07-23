const request = require("request");
const jsdom = require("jsdom");
const { Console } = require("console");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderBoard = [];

request(link,cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags = document.querySelectorAll('a[data-hover="Scorecard"]');
        for(let i=0;i<allScorecardTags.length;i++){
            let link = allScorecardTags[i].href;
            let completeLink = "https://www.espncricinfo.com" + link;
            request(completeLink, cb2);
        }
    }
}

function cb2(error, response, html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenRow = document.querySelectorAll(".table.batsman tbody tr");
        for(let i=0;i<batsmenRow.length;i++){
            let cells = batsmenRow[i].querySelectorAll("td");
            if(cells.length==8){
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixes = cells[6].textContent;
            }
        }
    }
}    

processPlayer('Rohit','15','2','4','3');
processPlayer('vIAR','15','2','4','3');
processPlayer('Rohit','15','2','4','3');

console.log(leaderBoard);

function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);

    for(let i=0;i<leaderBoard.length;i++){
        let playerObj = leaderBoard[i];
        if(playerObj.Name == name){
            playerObj.Runs+= runs;
            playerObj.Balls+= balls;
            playerObj.Fours+= fours;
            playerObj.Sixes+= sixes;
            return;
        }
    }

    let obj = {
        Name: name,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixes: sixes
    }
    leaderBoard.push(obj);
}
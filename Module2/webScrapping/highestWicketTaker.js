const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";
request(link,cb);
let mostWicket = 0;
function cb(error, response, html){
    if(error){
        console.log(error);
    }else{
        // console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let bowlerTable = document.querySelectorAll(".table.bowler");
        // console.log(bowlerTable.length);
        for(let i=0;i<bowlerTable.length;i++){
            let rows = bowlerTable[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length;j++){
                let tds = rows[j].querySelectorAll("td");
                if(tds.length>1){
                    let name = tds[0].textContent;
                    let wicket = tds[4].textContent;
                    // console.log("Name---->  ", name, "              Wicket----->  ", wicket);
                    if(wicket>mostWicket){
                        mostWicket = wicket;
                        nameOfHighestWicketTacker = name;
                    }
                }
            }
        }
        console.log("Name of Highest Wicket Tacker ,", nameOfHighestWicketTacker);
        console.log("Name of Highest Wicket Tacker ,", mostWicket);
    }
}
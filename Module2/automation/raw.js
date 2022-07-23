const puppeteer = require("puppeteer");
let browswerPromise = puppeteer.launch({ headless: false });

browswerPromise.then(function(browser){
    console.log("broswer is openednode ");
    let pagePromise = browser.newPage();
    return pagePromise; 
}).then(function(page){
    console.log("page is opened");
    let urlPromise = page.goto("https://www.google.com/");
    return urlPromise;
}).then(function(){
    console.log("Google is opened");
});


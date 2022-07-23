// console.log("Swagat hai");
// let num=1;
// console.log(num);

// for(let num=1;num<=5;num++)
//     console.log(num);

// let num=17;
// let flag=0;
// for(let i=2;i*i<num;i++){
//     if(num%i==0){
//         flag=1;
//         break;
//     }
// }
//     if(flag==0)
//         console.log("Number is Prime");
//     else    
//         console.log("Number is not Prime");

// let a = function sub(num1,num2){
//     return num1-num2;
// // }

// // console.log(a(3,2));


// // (function(num1,num2){
// //     console.log(num1,num2);
// // })(10,5);

// let objKush={
//     Name: "Kushagra",
//     PhoneN: 90,
//     Dost:['Ask','hyuo','tony'],
//     Address:{
//         City:"Rohini",
//         State: "Delhi"
//     },
//     sayHi: function(){
//         console.log("Hello there is say hi");
//     }
// };

// objKush.sayHi();

// objKush.New = "New thing";

// console.log(objKush)

// delete objKush.New;
// console.log(objKush)

// console.log(objKush.Name)


let cp = require('child_process');
// cp.execFileSync('gnome-calculator');

// let os = require('os');
// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.networkInterfaces());
// console.log(os.userInfo());

let content = cp.execSync("node test.js");
console.log("Output of test.js: "+ content);
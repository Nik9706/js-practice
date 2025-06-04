// // //a single moment in time in a platform-independent format  i january 1970 

const mydate= new Date()   // Date is an Object 
console.log(mydate)


console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toJSON())
console.log(typeof mydate)

let mycreateddate =new Date(2024,0,22)
 mycreateddate =new Date(2024,0,22,5,3,3)
// let mycreateddate =new Date(2023,5,3)
console.log(mycreateddate.toLocaleString())
console.log(mycreateddate.toDateString())

//*********Time stamp is used when we design quiz or polls who polls first *************

let mytimestamp= Date.now()
//console.log(mytimestamp)   //Date.now() returns the number of milliseconds since January 1, 1970 00:00:00 UTC:



//console.log(mycreatedate.getTime())
//console.log(mycreateddate.getTime()/1000)
//console.log(Math.floor(Date.now()/1000));  // to get the value of time in millisecond 


// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Date.now() with a year
let years = Math.round(Date.now() / year);
console.log(years)

let newDate= new Date()
// console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getHours())
// console.log(newDate.getMinutes())

newDate.toLocaleString('default',{
    weekday:"long",
})

// / node 07_datesinjs.js
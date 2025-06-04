var a=20;
let b=30;
const c=40;


if(true){
    let b=10
    const c=20         // SCOPE KE ander ko value hoti wo bahar nhi jani chaiye code environment and browser environment main alahg hota hai
    var a=30
    console.log("value of b",b)

}
console.log(a)
console.log(b)
console.log(c) 

// function one(){
//     const username="Nitesh";

//     function two(){
//         const website = "Youtube";
//         console.log(username)
//         console.log(website)
        
// }                                     // inner function can access the outside function but outside cannot acces inner function 
//   //console.log(website)
//   two() }

// one()


// if(true){
//     const username="nitesh"

//    if(username==="nitesh")
//    {
//     const website="Youtube"
//     console.log(website)
//    }
//    //console.log(website)
//    console.log(username)
// }
// //console.log(username)  



// //********************hoisting**************************
// console.log(addvalue(5))
// function addvalue(num){

//     return num+1
// }
// //addvalue(5) */
 
// //console.log(addvalue(5))
// const addvalue=function(num)  // here the execution context happening where you cannot access the variable before the declaration
                                // temporal dead zine
// {
//     return num+1
// 
// console.log(addvalue(5))



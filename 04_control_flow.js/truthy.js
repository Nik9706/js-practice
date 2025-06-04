// const useremail=''
// if(useremail){
//     console.log("user is having the email")
// }
// else{
//     console.log("user did not have it ")
// }
//falsy values
//false ,0 ,-0,BigInt 0n,"",null,undefined,NAN

//truthy value
//"0" , 'false'," ",[],{},function(){}


//how to check if the array is empty 
// if(useremail.length===0){
//     console.log("array is empty") } 


//     //how to check if the array is object
// const emptyObj={}
// if(Object.keys(emptyObj).length===0)
// {
//     console.log("Object is empty")
// }

//Null coalescing operator (??):Null undefined 

let val1;
val1 =5??10;
console.log(val1)  
val1= null??10;
console.log(val1)  
val1= undefined??10;
console.log(val1)  
val1= null??10??20
console.log(val1)  

//Terniary operator 
//condition?statement1:statement2

const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80"):console.log("more then 80")
//node 04_control_flow\truthy.js
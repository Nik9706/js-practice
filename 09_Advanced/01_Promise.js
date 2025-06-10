// 1st Promise :- to do an sync task ,DB calls, Crytography,network Promise is object :- like eventual completion object
// const promiseOne=new Promise(function (resolved,reject){
//     setTimeout(() => {
//         console.log("Promise is executed")
//         resolved()
        
//     }, 1000);
// })
// promiseOne.then(function (){
//     console.log("promise is resolved")
// })

// //2nd Promise with variable 

// new Promise(function (resolved,reject){
//     setTimeout(()=>{
//         console.log("Promise is Executed")
//         resolved()
//     },1000)
// }).then(()=>console.log("Promised is Resolved"))

// //3rd Promise 

// const PromiseThree=new Promise(function(resolved,reject){
//     setTimeout(()=>{
//         console.log("Promise is Executed")
//         resolved({user:"NiTESH Dwivedi",Email:"Nitesh.kumar05010@gmail.com"})
//     },1000)
// })
// PromiseThree.then(function(user){
// console.log(user)})

//4th Promise 

const PromiseFour=new Promise(function(resolved,reject){
        setTimeout(()=>{
            let error=false
            if(!error){
                
                resolved({username:"Nitesh Dwivedi",Email:"NiTESH.kUMAR@gmail.com"})
            }
            else{
                
                reject("Error something went wrong")
            }
        },1000)
})
PromiseFour.then(function (user){
console.log(user)
return user.username

}).then(function(username){
 console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The Promise is either resolve or rejected")
})

//Promise 5th :- Promise is handled by async as wait were generally have to handle data base connection

// const PromiseFive=new Promise(function(resolved,reject){
//     setTimeout(()=>{
//         let error=true
//         if(!error){
            
//             resolved({username:"Javascript",Password:"123"})
//         }
//         else{
            
//             reject("Error something went wrong")
//         }
//     },1000)  
// })
// async function consumePromiseFive(){
//     const response=await PromiseFive
//     console.log(response)

// }
// consumePromiseFive()

//async await is used when ther is no error if there is error then we have to user try and catch method
// async function consumePromiseFive(){
//     try {
     
//   const response=await PromiseFive
//    console.log(response)

//   } catch (error) {
//     console.log("error")
        
//     }}
// consumePromiseFive()

// async function getallUsers() {
//    try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response)
    
//     const data= await response.json()
//     console.log(data)

    
//    } catch (error) {
//     console.log("E:",error);
    
//    }
// }
// getallUsers()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }
// ).catch((error)=>{
//     console.log(error)
// })

//node 09_Advanced/01_Promise.js
// /*console.log("H")
// console.log("I")

// function saymyname(){
//     console.log("H")
//     console.log("I")
// }
// saymynamem() 

// //adding 2 numbers 

// function addtwonumber(number1, number2) {
//     console.log(number1 + number2)
// }
// (addtwonumber(2, 3))

// function addtwonumber(number1,number2){
//     return number1+number2
// }
// const addednumber =addtwonumber(45,89)
// console.log(addednumber)


// function  loginusermessage(username){
//     if(username===undefined)
//     {
//         console("please enter a user name ")
//         return
//     }
//     return (`user is logged in${"username"}`)
// }
// const result =loginusermessage("Hello")
// console.log(result)



// function loginusermessage(username="nitesh"){

//     return`${username} just logged in `
// }
// const result=loginusermessage()
// console.log(result)


// //rest or spread operator 
// function calculateCartPrice(...num1)
// {
// return num1
// }
// console.log(calculateCartPrice(100,200,300,400)

// // //accessing object using function

// const user={
//     username:"Hitesh",
//     price:199
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

// }
// //handleObject(user)
// handleObject({
//     username:"sam",
//     price:399
// })


const user = {
    username: "nitesh dwivedi",
    id: 10001,
    class: "seven",

}
function handleObject(anyobject) {
    console.log(`user name of the user ${anyobject.username} and id ${anyobject.id} and class is ${anyobject.class}`)

}
handleObject({
    username: "sam",
    id: 20001,
    class: "eight"
})


// //arrays in function

// const myNewArray=[200,400,100,600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,500,1000]));
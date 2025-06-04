//singleton :- if we are using constructor then it became singleton

//using constructor - object.create (singleton)

//object literals

const sym=Symbol("key1")
const user={
    id:1001,
    [sym]:"mykey1",   //interview question 
    name:"nitesh ",
    "fullname":"Nitesh dwivedi",
    email:"nitesh_dwivedi@hcltech.com",
    isloggedin:false,
    lastlogin:["Monday","tueday"]
}

console.log(user.id)
//console.log(user.sym) we canot access symbol like this it will give an error 
console.log(user.fullname)
console.log(user["email"])
console.log(user[sym])
console.log(user["fullname"]) //different way to access object


// user.email="Nitesh_dwivedi@hcl.com"
// console.log(user.email)
// Object.freeze(user)  // it freezes the object and did not allow to make any changes 
// user.email="Hitesh@google.com"
// console.log(user)
// user.isloggedin=true
// console.log(user) 

user.greeting=function(){
    console.log("Hello everyone") 



}
console.log(user.greeting())

// //using this :- object ke ander jitne properties hongi usse this ke throgh access akrenge 


user.greeting2=function(){
    console.log(`hello everyone,${this.name}`)

console.log(`hello user ,${this.name}`);} 
console.log(user.greeting2())
//for the undefined will talk about later
// node 02_basics/03_objects.js

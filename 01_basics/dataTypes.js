// On the basis of how the data is kept in the memory and how the data is access we have to 2 data types 

//1:- Primitive  :- call by value 
//7 types - string , number ,boolean,null,undefined,symbol,Bigint     


//Reference or non primitive :- Array, Object ,Function 

// javascript is dynamically typed launguage 
// where the type of the variable is checked during compile time 2. variables can change type

// let string= "hello"; //string
// let number= "123"; // number 
// let isLoggedIn="false" //boolean
// let temprature= null  //null
// let email;  //undefined

//console.table([string,number,isLoggedIn,temprature,email])

const id= Symbol('121')
const anotherID=Symbol('121')

console.log(id===anotherID)   // Output :- False

let BigNumber =12346748684664877979874n  // Bignint  


// reference or non primitive data types 

const heros= ["Nitesh","Kunal","Shivam"]  //array 

let myobj1={
    id:1001,
    name:"Nitesh",
    age:22

}
//console.log(myobj1)

const myFunction= function(){
    console.log("Hello world")
}
//myFunction() 


// *******************************Memory ********************************8

//stack (Primitive) - we get duplicate value heap- Non-primitive :- In the heap we get the refrence of the original value 

//Primitive (stack)

let User1= "Nitesh dwivedi"
let User2= User1;
User2="hitesh dwivedi"
 
console.log(User1)
console.log(User2) 

//Non Primitive(heap)  */

let user1={
    id:10001,
    email:"user@gmail.com",

}
let user2=user1
user2.email="nitesh@gmail.com"
console.log(user1)
console.log(user2)




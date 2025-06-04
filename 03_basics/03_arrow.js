const user={
    username:"Nitesh",
    price:999,

    welcomemessage:function(){
       console.log(`${this.username},welcome to website`)
        //console.log(this)

    }
}
user.welcomemessage()   //  currect context means the  current value 
user.username="hitesh"  // here the current context change from Nitesh to Hitesh 
user.welcomemessage()
console.log(this)  // this reresent the current context depending upon where it is declare if it is declare in browser global window object 
                      // and in node environment it represent {}


// function hello(){
//     console.log(this)
// }
// hello()           // if it is declare in function it represent many thing like global clear inmediate 

// function hello(){
//     const username=hello
//     console.log(this.username)     //undefined 
// }
// hello()



// //**********************Using Arrow Function*************88

// const value=()=>{

//     const username="hello"
//     console.log(this.username)     //undefined 
// }
// value()  


// Unlike regular functions, arrow functions don't have a prototype property, which is essential for creating objects using the new keyword. 
// Lexical this binding:
// Arrow functions don't have their own this binding. Instead, they inherit the this value from the surrounding scope, 
// which can lead to unexpected behavior when used in certain contexts. 

// const value=(num1,num2)=>{
//     return(num1 + num2)
// }
// console.log(value(5,6)) 

// const value=(num1,num2)=>(num1+num2)
// console.log(value(5,6)) */


// // accessing object using arrow function 
// const value=(num1,num2)=>({username:"nitesh"})
// console.log(value(5,6))






















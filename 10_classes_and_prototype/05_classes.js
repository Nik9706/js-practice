//ES6 -classes

// class User{
//     constructor(username,email,password){
//         this.username=username,
//         this.email=email,
//         this.password=password
//     }
//     encrypted(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return this.username.toUpperCase()
//     }
// }
// const userOne=new User("Nitesh",12,"567878")
// console.log(userOne.encrypted())
// console.log(userOne.changeusername())


//behind the scene 

function user(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
    Object.prototype.encrypted=function(){
        return `${this.password}abc`
    }
     Object.prototype.changeusername=function(){
        return this.username.toUpperCase()
    }

const userOne=new user("Nitesh",12,"567878")
console.log(userOne.encrypted())
console.log(userOne.changeusername())


//node 10_classes_and_prototype/05_classes.js
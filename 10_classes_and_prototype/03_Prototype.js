const myname= "Nitesh   "
// here is we have to remove the space with out using the trim function 

console.log(myname.trim().length)
//console.log(myname.trueLength)  //main chahtu hu ki trim.lenght use kia bina remove kr du aur yha hum method banayenge


const allhero=["Spiderman","Superman"]
console.log(allhero)

const heroespower={
thor:"Hammer",
spiderman:"Sling",

 getsuperpower:function(){
              console.log(`super power of my hero ${this.spiderman} `)


}}
Object.prototype.hello=function(){
console.log("everyone is hero")}

heroespower.hello()
allhero.hello()

Array.prototype.hello1=function(){
    console.log("Hitesh Sir is hour hero")
}
allhero.hello1()
//heroespower.hello1()  // here we canno access object cannot be accessed 

//Protyple inheritence
const user ={
    username:"Nitesh Dwivedi",
    available:"yes"
}
const teacher={
    makevideo:true}
    
    const supportstaff={
    helpinginmakingnotes:true}
    
    const tasupport={
    available:false}
    
    const teacherstaff={
    
    available :true,
    __proto__:teacher}
    
    teacher.__proto__=user

    //modern syntax 
    Object.setPrototypeOf(teacherstaff,teacher)


const anotherusername="Chai aur Code"
String.prototype.trueLength= function (){
console.log(`the actual length of the string is ${this.trim().length}`) }

anotherusername.trueLength()
myname.trueLength()


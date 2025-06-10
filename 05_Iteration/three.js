// //for of 
// [""," "]
const arr=[1,2,3,4,5]   // i is just like iterator or index

for (const num of arr) {
  //  console.log(num)
    
}
const greetings="Hello World"
for (const greet of greetings){
    //console.log(`each char is ${greet}`)
}

// //Maps - no duplicate value all the values which we get is unique value.

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map)


//using for of loop in map 

for (const [key,value] of map) {
  //  console.log(key,':-',value);
    
}

//using for of in object - for of will not work in object as its not iterable 

const myObject={
    game1:"NFS",
    game: "Spiderman"
}
for (const [key,value] of myObject) {
    console.log(key,':-',value)
    
}
//node 05_Iteration/three.js


//The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
  // Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), 
  // as well as the arguments object, generators produced by generator functions, and user-defined iterables.
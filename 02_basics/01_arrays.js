//Arrays
const myarr=[0,1,2,3,4,5,true,"Nitesh"]
//console.log(myarr[1])
console.log(typeof myarr)

//array alaways makes shallow copy not deep copy  - shallow copy of an object whose properties share the same refrence i,e means changes will reflect in original arrays

const myheros=["ironman","thor"]
//console.log(myheros)

const myarr2=new Array(0,1,2,3,3,4,5,6)
console.log(myarr2[1])

// myarr2.push(7)
// myarr2.push(8)
// console.log(myarr2)
// myarr2.pop() // removes last  valueQ
// console.log(myarr2)
// myarr2.unshift(0)  // add the value at first 
// console.log(myarr2)

// myarr2.shift()  // remove the value at first
// console.log(myarr2) 
// console.log(myarr2.includes(9))

// console.log(myarr2.indexOf(9))   // it will tell the 9 is on which position
// console.log(myarr2.indexOf(4))   // it will tell you 4th is on which position
// console.log(myarr2) 

// const newarr= myarr2.join()  // it binds the arrays as well as convert the array in string
// console.log(typeof newarr)
// console.log(myarr2)  

//The join() method returns an array as a string.

//The join() method does not change the original array.

//Any separator can be specified. The default is comma (,).

// //slice ,splice  -

console.log("A",myarr2)
const nyn1=myarr2.slice(1,3)   

console.log("b",nyn1)  //slice does not include last range 
 console.log(myarr2)
 console.log("c",myarr2)

const nyn2 =myarr2.splice(1,3)
console.log(nyn2)
console.log(myarr2)        // splice does include the last range 

// //splice shows the properties of shallow copy - any change will reflect in orginal arrayy in slice it does not 
//node 02_basics/01_arrays.js

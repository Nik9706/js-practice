//MAP
//The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

const myNums=[1,2,3,4,5,6,7,8,9]



//channing
// const newnums=myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num >=40)   //filter is true and false game
// console.log(newnums)

const newnums=myNums.map((num)=>(num+10))
console.log(newnums)
//node 05_Iteration/seven.js 

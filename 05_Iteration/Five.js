const coding=["js","ruby","java","python"]
coding.forEach( function (val){
   console.log(val)
})

//using call back function 
coding.forEach((val)=>{
  console.log(val)
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
console.log(item,index,arr)
})


//we get the value from the database in the array format but it contains object inside it 
const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"C++",
        languageFileName:"CPP"
    },
    

]

myCoding.forEach( (item)=>{
    console.log(item.languageName)
})
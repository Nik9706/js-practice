// //Reduce 

//const myNums=[1,2,3,4]
const myNums=[22,32,43]

const mytotal=myNums.reduce(function(accumulator,currentvalue){
    console.log(`accumulator:${accumulator}and value of current value ${currentvalue}`)
    return accumulator +currentvalue },3)   // 3 is intial value 
console.log(mytotal) 

//const mytotal=myNums.reduce((accumulator,currentvalue)=>{return accumulator + currentvalue},0)
//console.log(mytotal)

const course=[
    {
        itemName:"js course",
    price:2999
},
{
    itemName:"Python course",
    price:3999,
},
{
    itemName:"Java course",
    price:4999,
},
{
    itemName:"datascience",
    price:12999,
}
]

const pricetop=course.reduce((acc,item)=>{
    return acc +item.price},0)
    console.log(pricetop)

const priceTOpay=course.reduce((accumulator,item)=>accumulator +item.price,0)
//console.log(priceTOpay)


// const course =[{
//     coursename:"Javscript",
//     Price :2999
    
//     },
//     {
//     coursename:"c++",
//     Price :2999
    
//     },
//     {coursename:"5000",
//     Price :2999
//     }]
    
//     const pricetopay=course.reduce((accumulator,item)=>{return accumulator,item.price},0)
//     console.log(pricetopay)
    

//node 05_Iteration/nine.js  
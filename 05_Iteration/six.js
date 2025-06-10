const coding=["js","ruby","java","python"]

const num=coding.forEach( (item)=>{
    //return console.log(item)
})
//console.log(num)

//for each does not return a value in order to return we use filter 

// const nums=[1,2,3,4,5,6,7,8,9]
// const newnums=nums.filter( (num)=> {
//    return num>4 })
// console.log(newnums)


// let newnums=[]
// newnums.forEach( (num)=> {
//     if(num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums)  

const books=[
    {title:'book one',genre:'fiction',publish:1981,edition:2006},
    {title:'book two',genre:'non-fiction',publish:1982,edition:2008},
    {title:'book three',genre:'science',publish:2000,edition:2010},
    {title:'book four',genre:'history',publish:1981,edition:2008},
]

const userBooks=books.filter((bk)=> bk.genre==='history')

console.log(userBooks)


// const userBooks=books.filter((bk)=> 
//     { return bk.publish>=2000}
// )
// console.log(userBooks)
//node 05_Iteration/six.js 
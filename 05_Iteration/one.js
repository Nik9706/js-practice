 
// for (let index=0;index<=10;index++){
//     const element=index;
//     if(element==5)
//         console.log("5 is best number ")
//     console.log(element);
// } 

// for(let i=1;i<=10;i++){
//     console.log(`outer loop${i}`)
//     {
//         for(let j=1;j<=10;j++)
//           //  console.log(`inner loop of ${j}and inner loop of ${i}`)
//         console.log(i+ '*'+ j +'='+ i*j);
//     }
// }
    

let myarray=["flash","batman","superman"]
console.log(myarray.length);
for(let index=0;index<myarray.length;index++){
    const element=myarray[index];
    console.log(element)

}
//Break and continue

for (let i=0;i<=20;i++){
    if(i==5)
    {
        console.log("detected 5")
       // break
        continue
    }
    console.log(`value of i is ${i} `)
}

for (let i = 1; i <=10; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(i +'*'+ j +'=' + i*j);
        
    }
    
    
}
//node 05_Iteration/one.js 
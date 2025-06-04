// let user1 ="Nitesh"
// let count =50
//console.log(user1 + count+ " value")
// console.log(`name of the user1 ${"Hello"} and count of the second ${"50"}`)

// Benfits of using bectics we use string interpolition 

// String is an object which gives values in the form of key value pairs


const gamename= new String("Hitesh dwivedi")   //another way of declaring string

// console.log(gamename[0])
// console.log(gamename.__proto__);
// console.log(gamename.length)
// console.log(gamename.toUpperCase())
// console.log(gamename.toLowerCase())
// console.log(gamename.charAt('2'))
// console.log(gamename.indexOf('d'))

const game=gamename.substring(0,4)  // Substring we cannot give negative value
//console.log(game)

const games=gamename.slice(-13,5)   // In Slice we can user -ve value 
console.log(games.slice())

// const newString="    Hitesh   "
// console.log(newString)
// console.log(newString.trim())    // trim remove the extra spaces from the sentence 

const url="iccworldcup20"
console.log(url.replace("cu","ab"))

console.log(url.includes("icc")) 
console.log(gamename.split("__"))

//node 05_Strings.js
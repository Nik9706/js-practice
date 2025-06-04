const marvel_heroes=["ironman","thor","spiderman"]
const dc_heroes=["batman","superman","flash"]

//*** using push 
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3])
// console.log(marvel_heroes[3][2])

 //**using concat */
marvel_heroes.concat(dc_heroes)
//console.log(marvel_heroes)

const allheroes=marvel_heroes.concat(dc_heroes)    // concat return the value in new array
//console.log(allheroes)


// //*** using spread operator 

const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

//** using 
const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=anotherarray.flat(Infinity)
console.log(real_another_array)

// // //this method is used in  data scraping 
 
console.log(Array.isArray("Hitesh"))  // to check weather this an an array or not
console.log(Array.from("Hitesh")) // to convert in array 

console.log(Array.from({name:"hitesh"})) /// interesting since it does we have to create an array using key or value it will give an empty array 

let score1= 100;
let score2=200;
let score3=300;



console.log(Array.of(score1,score2,score3))

// node 02_basics/02_arrays.js
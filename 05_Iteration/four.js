// For in 
const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
    
}

const arr=["Python","Java","Cpp","Ruby"]
for (const key in arr) {
   console.log(arr[key])
        
    }

//using for in on map to check ;- since object is not iterable it will not work 

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")



for (const key in map) {
    console.log(key)  
      
  }


  //The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols),
  //  including inherited enumerable properties.
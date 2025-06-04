// //object singleton using constructor 
// //const tinderUser=new Object() //using singleton

const tinderUser={}
tinderUser.id=1001;
tinderUser.name="Nitesh Dwivedi";
tinderUser.isloggedin=false;

//console.log(tinderUser)

// //Nesting in Object 

const regularuser={
    email:"nitesh_dwivedi@hcl.com",
    username:{
        fullname:{
            firstname:"NITESH",
            lastname:"Dwivedi",
        }


    }
}
console.log(regularuser.username.fullname.firstname)

// //Combining 2 objects

const obj1 ={1: "a", 2:"b"}
const obj2= {3:"a", 4:"b"}
const obj3= Object.assign({},obj1,obj2)

console.log(obj3)

//Object destructring 



const user={
username:"nitesh dwivedi",
id:"1001",
coursesubject:"datastructor"
}
console.log(user.coursesubject)
const{coursesubject:subject}=user
console.log(subject)


// //in api we get the values from the backend 
// //json structor we write api in the form of json we get the api in the form of object and array 
// //randow user me

// {
//     "name":"nitesh dwivedi"
//     "cousename":"js in hindi"
//     "price":"free"
// }


// /node 02_basics/04_objects.js
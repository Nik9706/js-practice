function setusername(username){
    this.username=username
}

function CreateUser(username,id,isloggedin){
    setusername.call(this,username),  //call ka user reference hold krne ke lia hota hai ,call ek function ke current execution context dusre ko pass kr deta hai 
    this.id=id,
    this.isloggedin=isloggedin
}

const userOne= new CreateUser("Nitesh",12,true)
console.log(userOne)

//node 10_classes_and_prototype/04_call.js
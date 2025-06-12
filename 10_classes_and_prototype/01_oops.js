function User(username,id,isloggedin){
   this.username=username;
   this.id=id;
    this.isloggedin=isloggedin
    
}

const userOne= new User("nitesh",12,true)
const userTwo= new User("Nitesh aur code",15,false)

console.log(userOne)

class User{
    constructor(username){
    this.username=username
    }
    logMe(){
    console.log(` logged in user ${this.username}`)

    
}}
class Teacher extends User{
    constructor(username,email,password){
        super(username),
        this.email=email,
        this.password=password
    }
    addCourse(){
    console.log(` course is added by  ${this.username}`)
    }
}
const userOne=new Teacher("Nitesh","nitesh@gmail.com","123")
const userTwo=new User("Nitesh")
userOne.addCourse()
userTwo.logMe()

console.log(userOne==userTwo)
console.log(userTwo instanceof User)


// $ node 10_classes_and_prototype/06_inheritence.js

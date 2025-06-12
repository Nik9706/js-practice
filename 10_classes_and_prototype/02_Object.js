function multiplyby5(num){
    return num*5 }
    
    multiplyby5.power=2  // yeh dot access to object ke sath lgta hai to kya function bhi ek object hai :- haanji
    
    console.log(multiplyby5(5))
    console.log(multiplyby5.power)
    console.log(multiplyby5.prototype)   //isse hmne samjha ki function bhi oject hi hai 
    
    function userOne(username,score){
    this.username=username 
    this.score=score 
    }
    
    
    userOne.prototype.increment=function(){
    this.score++}
    
    
    userOne.prototype.printMe=function(){
    console.log(this.score)}
    
    
    const user1= new userOne("Nitesh","15")
    const user2=new userOne("Hitesh","20")
    
    user1.printMe() // this will not going to work until we user on new keyword 
    user2.printMe()
    user1.increment() // this will not going to work until we user on new keyword 
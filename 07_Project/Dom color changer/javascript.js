const button=document.querySelectorAll('.button');
const body=document.querySelector('body');
button.forEach(function(button){
console.log(button);
button.addEventListener('click',function (e)
    {
    console.log(e)
    console.log(e.target)
    
   if(e.target.id==="grey"){
   body.style.backgroundColor="grey"}

   if(e.target.id==="Purple"){
    body.style.backgroundColor=e.target.id}

   if(e.target.id==="blue"){
    body.style.backgroundColor=e.target.id}

    
    if(e.target.id==="green"){
        body.style.backgroundColor=e.target.id}

        if(e.target.id==="orange"){
            body.style.backgroundColor=e.target.id}

});
   
   
});


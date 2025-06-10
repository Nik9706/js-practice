const form=document.querySelector('form')
//console.log(form)

form.addEventListener('submit',function (e){
    e.preventDefault();
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results')
    const body=document.getElementsByTagName('body')[0]
    
 
    if(height==='' || height<0 ||isNaN(height)) {
    results.innerHTML=`Please enter a valid height ${height}`
    }else if(weight==='' || weight<0 ||isNaN(weight)){
        results.innerHTML=`Please enter a valid height ${weight}`}
    else
    {
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    let message="";
     //show the result 

     if(bmi<=18.6){
       message=message+'you are underweight'
       body.style.backgroundColor="green"
     }
     else if(bmi>18.6 && bmi <=24.9)
     {
         message=message+'you are normal weight'
          body.style.backgroundColor="orange"
     }
     else {
        message=message+'warning overweight'
         body.style.backgroundColor="red"
     }
     results.innerHTML=`<span>${bmi} ${message}</span>`;

     
        
    }
    if(results<18.6){
        results.innerHTML= `You are underweight${results}`
     }

    

    
});
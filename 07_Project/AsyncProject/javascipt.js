const randomfunction=function(){
    const hex='0123456789ABCDEF'
    let color="#"
    
    for (let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
    }
      let intervalof
     const StartChangingcolor=function (){
    if(!intervalof){
    
    
       intervalof=setInterval(changebgcolor,1000)}
     function changebgcolor(){
    document.body.style.backgroundColor=randomfunction()}
    };
    
    const StopChangingcolor=function (){
    clearInterval(intervalof)
    intervalof =null };
    
    document.querySelector('#start').addEventListener('click',StartChangingcolor)
    document.querySelector('#stop').addEventListener('click',StopChangingcolor)
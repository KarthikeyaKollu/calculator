document.addEventListener('DOMContentLoaded',function(){
 var buttons = document.querySelectorAll('.num');
 var display = document.querySelector('.disp');
 var res="";
 var currbtn;
 const operators = ['+', '-', '*', '/','%'];
var c=0
 
 buttons.forEach(button => {
    button.addEventListener('click', () => {
     currbtn = button.textContent;
        if(currbtn!=='=' &&  currbtn!=="AC" && currbtn!=="DEL"){
           
            
            if(operators.includes(res[res.length-1]) && operators.includes(currbtn) ){
               res = res.slice(0,-1);
            }
            res = res + button.textContent;
            console.log(`is ${res}`);
            display.value=res;
            
        }
       else if(currbtn==='AC'){
            res="";
            console.log("Cleared");
            display.value=res;
        }
     else if(currbtn==='DEL'){
        if(res.length>0){
          res = res.slice(0,-1);
          display.value=res;
          
          if(res.length==0)
          console.log("cleared");
          console.log(res);
        }

     }
     else if (currbtn === '=') {
      console.log("clickeddd");
      try {
        res = eval(res);
        console.log(res);
        console.log(typeof res +" isss");
        
        if ( res === undefined) 
         display.value = eval(display.value);
        
         
       else
          display.value = res;
        
      } catch (error) {
        console.log("Error:", error);
      }
    }

    });
    
  });

});
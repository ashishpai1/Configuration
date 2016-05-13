// JS with stack 


function isValid(myStr){
    var arr = myStr.trim().replace(/ /g,"").split("");
    var stack = [];
    for(var i=0;i< arr.length;i++){
         console.log(stack)
         var currentElement = arr[i];
         if(currentElement === "[" || currentElement === "("  || currentElement === "{" ){
                        stack.push(currentElement);
         }else{
             if(currentElement === "]" || currentElement === ")"  || currentElement === "}" ){
                      var poppedElement = stack.pop();
             }   
         }        
    }
    if(stack.length === 0){
       return true;
    }else{
      return false;
    }
}

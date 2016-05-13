// JS with stack 


function isValid(myStr){
    var arr = myStr.trim().replace(/ /g,"").split("");
    var stack = [];
    if(arr.length % 2 !== 0){
        return false;
    }
    for(var i=0;i< arr.length;i++){
         console.log(stack)
         var currentElement = arr[i];
         if(currentElement === "[" || currentElement === "("  || currentElement === "{" ){
                        stack.push(currentElement);
         }else{
                var poppedElement = stack.pop();
                if(poppedElement === ")" || poppedElement === "}" ||  poppedElement === "]"){
                    return false; 
                }
         }        
    }
    if(stack.length === 0){
       return true;
    }else{
      return false;
    }
}

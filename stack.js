// JS with stack 
// Input :  {([])} {()} {} ()
// Output :  valid

// Input : {{} ()
// Output :  invalid

// Solution :  create an array and a stack(initially empty)
function isValid(myStr){
    var arr = myStr.trim().replace(/ /g,"").split("");
    var stack = [];
    
    if(arr.length % 2 !== 0){
        return false;
    }
    
    var keyObject = {};
    keyObject["{"] = "}";
    keyObject["("] = ")";
    keyObject["["] = "]";
    
    for(var i=0;i< arr.length;i++){
         console.log(stack)
         var currentElement = arr[i];
         if(currentElement === "[" || currentElement === "("  || currentElement === "{" ){
                stack.push(currentElement);
         }else{
                var poppedElement = stack.pop();
                if(keyObject[poppedElement] === undefined){
                    return false; 
                }
                if(keyObject[poppedElement] !== currentElement){
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

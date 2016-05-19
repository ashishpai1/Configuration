// get a range of primes from m to n. 
// getRange(1,10)

var getRange = (function(){ 

var getPrimeRange = function(from, to){
  var primeArray = []; 
  for(var i=from;i<to;i++){
      if(isPrime(i)){
           primeArray.push(i);
      }    
  }
  return primeArray;
}


function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
    return getPrimeRange;
})()

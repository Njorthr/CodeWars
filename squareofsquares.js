// Given an integral number, determine if it's a square number:
var isSquare = function(n){
    if(n >= 0) {
      if(Number.isInteger(Math.sqrt(n))) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
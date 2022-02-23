function arrayDiff(a, b) {
  
    if(b.length == 0) {
      return a;
    }
   
  let result = a.filter((num) => {
    
    for(let i = 0; i < b.length;i++) {
       if(num === b[i]) {
           res = false
           break;
       } else { res = true}
    }
    return res;
  })
   
 return result;
   
 }
 
 // two loops comparing current element to all elemenets if match remove current


 // Best Practises

 function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}

function array_diff(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
}
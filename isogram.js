/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/
// My solution
function isIsogram(str){
    let letters = str.toLowerCase().split("");
    console.log(letters)
    console.log(letters.indexOf("e"))
    if(letters == "") {
      return true;
    }
    for (let i = 0;i < letters.length;i++){
      if(letters.indexOf(letters[i]) === letters.lastIndexOf(letters[i])) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
    return result;
}

// Best practise
function isIsogram(str)  {
    // Downcase everything, split on letters.
    str_lc = str.toLowerCase();
    var letters = str_lc.split('');
    
    // Utility: checks whether the given "value" at "index" is actually
    // first encountered at this "index" position within a string ("self").
    // Expected to be used with Array#filter.
    var check4uniqueness = function(value, index, self) { 
      return self.indexOf(value) === index;
    }
    
    // An isogram string contains no duplicate, hence must have the same
    // length than the array composed of unique letters from that string.
    return letters.filter(check4uniqueness).length == str.length;
  }
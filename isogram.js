function isIsogram(str){
    let letters = str.toLowerCase().split("");
    console.log(letters)
    for(let i = 0;i < letters.length;i++) {
      for(let k = i + 1; i < letters.length;k++) {
        if(letters[i] === letters[k]){
          return false
        }
      }
    }
    return true
  }

  console.log(isIsogram("Dermatoglyphics"));

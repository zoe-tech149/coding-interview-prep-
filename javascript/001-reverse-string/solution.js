const s = "SUNFLOWER";



function reverseString(s) {

  let reversedString = "";
  
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }

  console.log(reversedString);
}





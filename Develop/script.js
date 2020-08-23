// Assignment Code
  const generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);
  const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "/", "?", "-", "_"];
  
  const confirmLength = "";
  const confirmLowerCase = "";
  const confirmUpperCase = "";
  const confirmNumericCharacter = "";
  const confirmSpecialCharacter = "";
    console.log

  function generatePassword() {
    const confirmLength = (prompt("How many characters would you like your password to contain?"));
    
  while(confirmLength <= 7 || confirmLength >= 128) {
    alert("Your password must be at least 8 but up to 128 characters. Please try again.");
    const confirmLength = (prompt("How many characters would you like your password to contain?"));
  }
    alert('Your password will have ${confirmLength} characters');

    let userPassword = ""

  if(passwordLength >= 8) {
    const passwordLowercase = confirm("Would you like a lowercase letter?")
    const passwordUppercase = confirm("Would you like a uppercase letter?")
    const passwordNumeric = confirm("Would you like a numeric number?")
    const passwordSpecialchar = confirm("Would you like a special character?")
  
  if(passwordLowercase === true) {
userPassword += lowercaseLetter

  if(passwordUppercase === true) {
userPassword += uppercaseLetter
}
}
}
  return randomPassword
}
  // Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  }
  
  
  const generateEl = document.querySelector('generate'); 

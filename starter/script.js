var generateBtn = document.querySelector('#generate');
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password 
var upperCasedCharacters = [
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z']



// Function to prompt user for password options

function generatePassword() {

  if (upperCasedCharacters) {
    passwordCharacters += upperCasedCharacters;
    var password = "";
    var passwordCharacters = "";
    var chooseCharLength = prompt("Choose a password between 8 and 128 characters");
  chooseCharLength = parseInt(chooseCharLength);
  
  if (chooseCharLength < 8) {
    alert("Please choose a password with 8 or more characters!");
    return "";
  } 
  
  if (chooseCharLength < 8) {
    alert("Please choose a passowrd with less than 128 characters");
    return ""
  }
  
  lowerCasedCharacters = prompt("Add a few lower-capped characters!");
  

  if (lowerCasedCharacters) {
    passwordCharacters += lowerCasedCharacters
  }

  upperCasedCharacters = prompt("Add a few upper-capped characters!");

  if (upperCasedCharacters) {
    passwordCharacters += upperCasedCharacters
  }
  
  numericCharacters = prompt("Add numbers!")

  if (numericCharacters){
    passwordCharacters += numericCharacters
  }
  
  specialCharacters = prompt("Add special characters!")

  if (specialCharacters){
    passwordCharacters += specialCharacters
  }
    
  for (var i = 0; i < chooseCharLength; i++){
    password = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
  }

  function writePassword() {
    var passowrd = generatePassword
    var passwordText = document.querySelector('#password');
    passwordText.value = password;

  }


    





}






}




  
}




// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);








   
    
 

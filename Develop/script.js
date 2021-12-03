// Assignment code here


// Get references to the #generate element // this targets the generate button 
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("button works");

  return "password goes here";
}

// Write password to the #password input // function that is called by click of generate button // function from "generatePassword"
// will be stored in Password variable // no generatePassword function is made !!
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //password will be displayed on password text on screen
  passwordText.value = password;

}

// Add event listener to generate button // when generate button is clicked, writePassword function will be called
generateBtn.addEventListener("click", writePassword);

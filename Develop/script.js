// Assignment code here

// This targets the generate button 

var generateBtn = document.querySelector("#generate");

const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerChar = "abcdefghijklmnopqrstuvwxyz"
const specialChar = "!@#$%^&*()_-+=/?.,<>';"
const numberChar = "0123456789"

// Function to generate the password

function generatePassword() {

  let passLength = parseInt(window.prompt("How many characters (between 8-128) would you like your password to contain"));

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
  alert("Please enter a valid number between 8 and 128");
  return generatePassword ();
  }

// Prompt user for uppercase, lowercase, special characters, numeric

  let includeUpper = confirm("Would you like to include uppercase letters?");

  let includeLower = confirm("Would you like to include lowercase letters?");

  let includeSpecial = confirm("Would you like to include special characters?");

  let includeNumbers = confirm("Would you like to include numbers?");

// Validate the user's input (make sure length is between 8-28 and that at least one character type is selected)

  if (!includeUpper && !includeLower && !includeSpecial && !includeNumbers) {
    alert("Please choose at least one value!")
    return generatePassword();
  }

// Constructs password based on whether or not above prompts were confirmed

  var returnPassword = "";

    if (includeUpper === true) {
      returnPassword += upperChar; "";
    } 
    if (includeLower === true) {
      returnPassword += lowerChar; "";
    }
    if (includeSpecial === true) {
      returnPassword += specialChar; "";
    }
    if (includeNumbers === true) {
      returnPassword += numberChar; "";
    }

  var finalPassword = "";

    for (var i = 0; i < passLength; i++) {
      finalPassword += returnPassword.charAt(Math.floor(Math.random() * returnPassword.length));
    }

  console.log(finalPassword);


//Display the generated password to the page

  return finalPassword;
}

// Write password to the #password input // function that is called by click of generate button // function from "generatePassword"

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //password will be displayed on password text on screen

  passwordText.value = password;

}

// Add event listener to generate button // when generate button is clicked, writePassword function will be called

generateBtn.addEventListener("click", writePassword);

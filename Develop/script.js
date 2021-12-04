// Assignment code here

// Get references to the #generate element // this targets the generate button 
var generateBtn = document.querySelector("#generate");

const upperChar = ['A','B,','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const specialChar = ['!','@','#,','$','%','^','&','*','?','.',',']
const numberChar = ['0','1','2','3','4','5','6','7','8','9']

function generateCriteria() {
  console.log("yay, this button works");

//Prompt for password LENGTH (8-128)

let passLength = parseInt(window.prompt("How many characters (between 8-128) would you like your password to contain"));

if (passLength < 8 || passLength > 128) {
  alert("Please enter a valid number between 8 and 128");
  return;
}

//Prompt user for uppercase, lowercase, special characters, numeric

let includeUpper = confirm("Would you like to include uppercase letters?");

let includeLower = confirm("Would you like to include lowercase letters?");

let includeSpecial = confirm("Would you like to include special characters?");

let includeNumbers = confirm("Would you like to include numbers?");

//Validate the user's input (make sure length is between 8-28 and that at least one character type is selected)

  if (!includeUpper && !includeLower && !includeSpecial && !includeNumbers) {
    alert("Please choose at least one value!")
    return;
  }

  var passwordCriteria = {
    length: passLength,
    upper: includeUpper,
    lower: includeLower,
    special: includeSpecial,
    numbers: includeNumbers
  }
  return passwordCriteria;

}

//Generate the password

function generatePassword() {

  var passwordCriteria = generateCriteria ();
  console.log(passwordCriteria)

  let passOptions = [];
  console.log(passOptions)

  if (passwordCriteria.upper) {
    for (i = 0; i < includeUpper.length; i++) {
      passOptions.push(upperChar[i]);
    }
  }
  if (passwordCriteria.lower) {
    for (i = 0; i < includeLower.length; i++) {
      passOptions.push(lowerChar[i]);
    }
  }
  if (passwordCriteria.special) {
    for (i = 0; i < includeSpecial.length; i++) {
      passOptions.push(specialChar[i]);
    }
  }
  if (passwordCriteria.numbers) {
    for (i = 0; i < includeNumbers.length; i++) {
      passOptions.push(numberChar[i]);
    }
  }

  let passwordResult =[];
  
  for (let i = 0; i < passwordCriteria.length; i++) {
    let randomGenerate = Math.floor(Math.random() * Math.floor(passwordCriteria.length));
    passwordResult.push(passwordOptions[randomGenerate])
  }

  console.log(passwordResult)

  let finalPass = passwordResult.join('');
  console.log(finalPass)


//Display the generated password to the page
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

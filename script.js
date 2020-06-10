// Assignment Code
var generateBtn = document.querySelector("#generate");
var input = document.getElementById("My Password");

// Write password to the #password input
function writePassword() {
  Math.random (password) = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

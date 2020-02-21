// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button//
generateBtn.addEventListener("click", generatePassword);

// // In order to generate password within the textbox
function generatePassword(small, caps, num, special, userLength) {
  var password = "";
  var passwordText = document.querySelector("#password");
  var small = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var symbol = "~!@#$%^&*()`-=";
  var characters = "";

  // confirms and prompts
  var lowercase = confirm("Do you want your password to have lowercase?");
  var uppercase = confirm("Do you want your password to have uppercase?");
  var number = confirm("Do you want your password to have numbers?");
  var special = confirm("Do you want your password to have special characters");
  var userLength;
  userLength = prompt(
    "How many characters would you like your password to be?"
  );

  // determining the length of password
  while (userLength > 128 || userLength < 8) {
    alert("Your must word length must be between 8 and 128 characters");
    userLength = prompt(
      "How many characters would you like your password to be?"
    );
  }

  //CONDITION OF CRITERIONS
  // if user chooses to include lowercase letters, lowercase letters will be included in final password string
  if (lowercase === true) {
    characters = characters + small;
  }
  // if user chooses to include uppercase letters, uppercase letters will be included in final password string
  if (uppercase === true) {
    characters = characters + caps;
  }
  // if user chooses to include numbers, numbers will be included in final password string
  if (number === true) {
    characters = characters + num;
  }
  // if user chooses to include symbols, symbols will be included in final password string
  if (special === true) {
    characters = characters + symbol;
  }
  // if user doesn't pick any criteria, a prompt to try again will appear
  if (
    lowercase === false &&
    uppercase === false &&
    number === false &&
    special === false
  ) {
    alert("Not applicable, please choose at least one criteria. Start again.");
  }
  // loop to choose password characters
  for (var i = 0; i < userLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    passwordText.value = password;
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompts
var length = prompt("Chose a length for you password from 8-125 characters.");
var lowerCase = confirm("Would you like lower case letters?");
var upperCase = confirm("Would you like upper case letters?");
var numbers = confirm("Would you like numbers?");
var special = confirm("Would you liek special characters?");

var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbersArray = [0,1,2,3,4,5,6,7,8,9];

//splitting the characters into a separate array.
lowerCharactersArray = lowerCaseCharacters.split("");
upperCharactersArray = upperCaseCharacters.split("");
specialCharactersArray = specialCharacters.split("");

//Creating random integers using the max number
function randomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
}

function generatePassword(){
  var passwordCreated= "";
  var options=[];
  debugger;
  if (lowerCase === true){
    options = options.concat(lowerCharactersArray);
  };
  if (upperCase === true){
    options = options.concat(upperCharactersArray);
  };
  if(special === true){
    options = options.concat(specialCharactersArray);
  };
  if(numbers === true){
    options = options.concat(numbersArray);
  }
  //puts each chosen option into a new array

  for(i=0; i<length; i++){
    var index = randomInt(options.length-1);
    passwordCreated += options[index];
  }
  return passwordCreated;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

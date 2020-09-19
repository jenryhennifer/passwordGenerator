// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompts

var passwordLength = Number(prompt("Chose a length for you password from 8-128 characters."));
  lengthChecker(); //checking to make sure the length of the password is between
var lowerCase = confirm("Would you like lower case letters?");
var upperCase = confirm("Would you like upper case letters?");
var numbers = confirm("Would you like numbers?");
var special = confirm("Would you liek special characters?");
  checkForResponse();

var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbersArray = [0,1,2,3,4,5,6,7,8,9];

//splitting the characters into a separate array.
lowerCharactersArray = lowerCaseCharacters.split("");
upperCharactersArray = upperCaseCharacters.split("");
specialCharactersArray = specialCharacters.split("");

function lengthChecker(){
  while (8 > passwordLength || 128 < passwordLength) {
    alert("Please give length between 8 and 128");
    passwordLength = prompt("Chose a length for you password from 8-128 characters.");
  };
};

function checkForResponse() {
  while(lowerCase === false && upperCase === false && numbers === false && special === false){
    alert("please choose at least one type of character.");
    lowerCase = confirm("Would you like lower case letters?");
    upperCase = confirm("Would you like upper case letters?");
    numbers = confirm("Would you like numbers?");
    special = confirm("Would you liek special characters?");
  }
}

//Creating random integers using the max number
function randomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
};



function generatePassword(){
  var passwordCreated= "";
  var options=[];

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

  for(i=0; i<passwordLength; i++){
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

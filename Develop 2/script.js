// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompts
var length = 10 // prompt("Chose a length for you password from 8-125 characters.");
var lowerCase = true // confirm("Would you like lower case letters?");
var upperCase = true // confirm("Would you like upper case letters?");
var numbers = true // confirm("Would you like numbers?");
var special = true // confirm("Would you liek special characters?");

var lowerArray = "abcdefghijklmnopqrstuvwxyz";
var upperArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialArray = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//splitting the characters into a separate array.
lowerArray = lowerArray.split("");
upperArray = upperArray.split("");
specialArray = specialArray.split("");

//Creating random integers using the max number
function randomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
}

function generatePassword(){
  var passwordCreated= "";
  var options=[];
  debugger;
  if (lowerCase === true){
    options = options.concat(lowerArray);
  };
  if (upperCase === true){
    options = options.concat(upperArray);
  };
  if(special === true){
    options = options.concat(specialArray);
  };
  //puts each chosen option into a new array

  for(i=0; i<length; i++){
    var index = randomInt(length.length-1);
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

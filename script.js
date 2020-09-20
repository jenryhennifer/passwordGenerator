// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creating random integers using the max number
function randomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
};

var passwordLength;
var lowerCase;
var upperCase;
var numbers;
var special;

//funciton to get preferences
function getPasswordPreferencess() {
  //a function to check if the length is between 8 and 128 and prompts to try again
  function lengthChecker(){
    while (8 > passwordLength || 128 < passwordLength) {
      alert("Please give length between 8 and 128");
      passwordLength = prompt("Chose a length for you password from 8-128 characters.");
    };
  };


  //a function to check if there was at least one character response and promtps to try again
  function checkForResponse() {
    while(lowerCase === false && upperCase === false && numbers === false && special === false){
      alert("please choose at least one type of character.");
      lowerCase = confirm("Would you like lower case letters?");
      upperCase = confirm("Would you like upper case letters?");
      numbers = confirm("Would you like numbers?");
      special = confirm("Would you like special characters?");
    };
  };

  //Prompts
  passwordLength = Number(prompt("Chose a length for you password from 8-128 characters."));
  lengthChecker(); //calling the checking function
  lowerCase = confirm("Would you like lower case letters?");
  upperCase = confirm("Would you like upper case letters?");
  numbers = confirm("Would you like numbers?");
  special = confirm("Would you liek special characters?");
  checkForResponse();//calling the checking function
}

//function to generate password
function generatePassword(){

  getPasswordPreferencess();

  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];

//splitting the characters into a separate array.
  lowerCharactersArray = lowerCaseCharacters.split("");
  upperCharactersArray = upperCaseCharacters.split("");
  specialCharactersArray = specialCharacters.split("");

//emtpy variables to use
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


  var numbersPref = false;
  var upperPref = false;
  var lowerPref = false;
  var specialPref = false;

  while (!(numbersPref && upperPref && lowerPref && specialPref)) {
  passwordCreated = "";
    //for loop puts each chosen option into a new array
  for(i=0; i<passwordLength; i++){ 
    var index = randomInt(options.length-1);
    passwordCreated += options[index];
  }
  debugger;
  var passwordLetters = passwordCreated.split("");
  function checkOptions(x,array){
    return array.includes(x);

  }

  if (lowerCase === true){
    lowerPref = passwordLetters.some(char => checkOptions(char,lowerCharactersArray));
  }else {lowerPref = true}

  if (upperCase === true){
    upperPref = passwordLetters.some(char => checkOptions(char,upperCharactersArray));
  }else{upperPref = true}

  if (special === true){
    specialPref = passwordLetters.some(char => checkOptions(char,specialCharactersArray));
  }else{specialPref = true}

  if (numbers === true){
    numbersPref = passwordLetters.some(char => checkOptions(char, numbersArray));
  }else{numberPref = true}
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

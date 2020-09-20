# Random Password Generator

## Installation

Deployment:

 https://jenryhennifer.github.io/passwordGenerator/

GitHub:

 https://github.com/jenryhennifer/passwordGenerator

<hr>

## Technology Used

* HTML
* CSS
* JavaScript
* GitLab
* GitHub

## Sample Image

![Sample](Assets/03-javascript-homework-demo.png)

<hr>

## Descrtiption

The purpose of this project was to use JavaScript to generate a random password. Once the button is pressed it prompts the user to chose a desired length of a password between 8 and 128 characters. Next the user must confirm if they want upper case, lower case, numbers, and or special characters. Once the prompts are completed the password will generate automatically on the screen. If the button is pressed again, the user with be given the same prompt and a new password.

I created a function to check the requested length to ensure it is within desired range. If the user chooses a number loer than 8 or higher than 128, then the page will prompt the user to pick a new number:
```    
    function lengthChecker(){
      while (8 > passwordLength || 128 < passwordLength) {
        alert("Please give length between 8 and 128");
        passwordLength = prompt("Chose a length for you password from 8-128 characters.");
      };
    };
```
I also created a function to ensure that the user confirmed at minimum one option was chosen in the promtps. If the user choses 'cancel' on all prompts then they will be reprompted to choose at least one type of characters:
```
    function checkForResponse() {
      while(lowerCase === false && upperCase === false && numbers === false && special === false){
        alert("please choose at least one type of character.");
        lowerCase = confirm("Would you like lower case letters?");
        upperCase = confirm("Would you like upper case letters?");
        numbers = confirm("Would you like numbers?");
        special = confirm("Would you liek special characters?");
      };
    };
```


## License

MIT License

Copyright (c) 2020 Jennifer Henry

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<hr />
<hr />

# Author

Jennifer Henry

* [LinkedIn](https://www.linkedin.com/in/jennifer-henry-4a540a149/)
* [GitHub](https://github.com/jenryhennifer)
* jenhenry1995@gmail.com

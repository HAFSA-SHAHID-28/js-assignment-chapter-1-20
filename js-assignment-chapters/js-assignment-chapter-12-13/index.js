document.writeln("<br><br><br>");


//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
var inputCharacter = prompt("Enter a single character: ");
    if (inputCharacter.length === 1) {
        if (inputCharacter >= '0' && inputCharacter <='9') {
            alert("It is a Number.");
        }else if (inputCharacter >= 'A' && inputCharacter <='Z') {
            alert("It is an Uppercase letter.");
        }else if (inputCharacter >= 'a' && inputCharacter <='z') {
            alert("It is a Lowercase letter.");
        }else{
            alert("It is a Special Character or Symbol.");
        }
    }else{
        alert("Please enter only one character.");
    }








//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
    var num1 = +prompt("Enter a the first integer:");
        var num2 = +prompt("Enter a the second integer:");
            if (num1 > num2) {
                alert("The larger number is : " + num1);
                    }else if (num2 > num1) {
                        alert("The larger number is : " + num2);
                            }else{
                                alert("Both numbers are equal.");
                                    }








//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var inputNumber = +prompt("Enter any number:");
        if (inputNumber > 0) {
            alert("The number is Positive.");
                }else if (inputNumber < 0) {
                    alert("The number is Negative.");
                        }else{
                            alert("The number is Zero.");
                                }










//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
    var character = prompt("Enter a single character!").toLowerCase();
        if (character.length === 1) {
            if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
                alert(true);
            }else{
                alert(false);
            }
        }else {
            alert("Please enter only one character.");
          }






//5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “ Please enter your password”
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
        var correctPassword = "mypass123";
        var userPassword = prompt("Enter your password");
        if (userPassword === "") {
            alert("Please! Enter your password.");
        } else if (userPassword === correctPassword) {
            alert("Correct! The password you entered matches the original password.");
        }else{
            alert("Incorrect password.");
        }








//6. This if/else statement does not work. Try to fix it:
    var greeting;
    var hour = 13;
        if (hour < 18) {
            greeting = "Good day";
        }else{
            greeting = "Good evening";
        }
        alert(greeting);







//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

    var time = +prompt("Enter time in 24-hour format (e.g. 1900 for 7pm):");

        if (time >= 0000 && time <= 1200) {
            alert("Good Morning");
        }else if (time >= 1200 && time <= 1700) {
            alert("Good Afternoon");
        }else if (time >= 1700 && time <= 2100) {
            alert("Good Evening");
        }else if (time >= 2100 && time <= 2359) {
            alert("Good Night");
        }else{
            alert("Invalid time format. Please enter a value between 0000 and 2359.");
        }











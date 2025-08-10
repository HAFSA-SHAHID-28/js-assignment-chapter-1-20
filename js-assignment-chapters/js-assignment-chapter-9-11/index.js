document.writeln("<br><br><br>");

//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
    var cityName = prompt("Enter your city name!").toLowerCase();
        if (cityName === "karachi") {
            alert("Welcome to city of lights!");
                }else{
                    alert("City not found!");
                    }



//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
var userGender = prompt("Enter your gender!").toLowerCase();
        if (userGender === "female") {
            alert("Good Morning Ma’am.");
                }else if (userGender === "male") {
                    alert("Good Morning Sir.");
                        }else {
                            alert("Enter the gender between male and female!\nThank you!")
                            } 







//3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 
var signalColor = prompt("Enter the signal color!").toLowerCase();
        if (signalColor === "red") {
            alert(signalColor + " means ----- Must Stop");
                }else if (signalColor === "yellow") {
                    alert(signalColor + " means -----Ready to move");
                        }else if (signalColor === "green") {
                            alert(signalColor + " means -----Move now");
                                }else {
                                    alert("Enter the correct signal color!\nThank you!");
                                        } 







//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
var remainingFuel = +prompt("Enter the remaining fuel in car in litres!").toLowerCase();
     if (0.25 > remainingFuel) {
         alert("Please refill the fuel in your car");
             }else{
                 alert("You have enough fuel!");
                     }








//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a.
   var a = 4;
   if (++a === 5){  // 5 = 5 so it is true
   alert("given condition for variable a is true");
   }
          //b.
            var b = 82;
            if (b++ === 83){ // it is false bcoz 82 = 83 : then it becomes 83
            alert("given condition for variable b is true");
            }
                   //c. 
                     var c = 12;
                     if (c++ === 13){ // false
                     alert("condition 1 is true");
                     }
                       if (c === 13){ // now c becomes 13 so true
                       alert("condition 2 is true");
                       }
                         if (++c < 14){  // c = 13 ; so ++c = 14 ; 14 < 14 ; it becomes false
                         alert("condition 3 is true");
                         }
                           if(c === 14){ //c = 14 so it is true
                           alert("condition 4 is true");
                           }
                     //d. 
                     var materialCost = 20000;
                     var laborCost = 2000;
                     var totalCost = materialCost + laborCost;
                     if (totalCost === laborCost + materialCost){ // total cost = total cost so it is true
                     alert("The cost equals");
                     }
        //e.
            if (true){ //becoz true always run
            alert("True");
            }
            if (false){ //it was skipped because it is false
            alert("False");
            }   
//f. 
  if("car" < "cat"){ // it runs because it is checked by  Unicode so true
  alert("car is smaller than cat");
  }











//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: Show the total marks, marks obtained, percentage, grade & remarks like:
var subject1 = +prompt("Enter marks of subject 1 :");
     var subject2 = +prompt("Enter marks of subject 2 :");
         var subject3 = +prompt("Enter marks of subject 3 :");
             var totalMarks = +prompt("Enter total marks :");
         var obtainedMarks = subject1 + subject2 + subject3;
     var percentage = (obtainedMarks / totalMarks) * 100 ;
var grade, remarks ;
if (percentage >= 0 && percentage <= 100) {
    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    }else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    }else {
        grade = "Fail";
        remarks = "Sorry";
    }
} else {
    grade = "Invalid number";
    remarks = "invalid number";
}

document.writeln("<h2>MARKSHEET</h2>  <br><br>");
     document.writeln("Total Marks: " + totalMarks + "<br>");
         document.writeln("Marks Obtained: " + obtainedMarks + "<br>");
         document.writeln("Percentage: " + percentage + "<br>");
     document.writeln("Grade: " + grade + "<br>");
document.writeln("Remarks: " + remarks + "<br>");


document.writeln("<br><br><br><hr><br><br><br>");




//7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. 
var secretNumber = 7;
//Prompt user to guess the secret number.
var userGuess = +prompt("Guess the secret number (between 1 and 10):");
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
}else {
    alert("Wrong guess. Try again!");
}







 

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
var number = +prompt("Enter a number: ");
    if (number % 3 === 0) {
        alert("The number is divisible by 3.");
    }else{
        alert("The number is not divisible by 3.");
    }










//9. Write a program that checks whether the given input is an even number or an odd number.

// var number = +prompt("Enter a number: ");
//     if (number % 2 === 0) {
//         alert("The number is Even.");
//     }else{
//         alert("The number is Odd.");
//     }








//10. Write a program that takes temperature as input and shows a message based on following criteria
    var temperature = +prompt("Enter the Temperature.");
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”
    if (temperature > 40 ) {
        alert("It is too hot outside.");
    } else if (temperature > 30 ) {
        alert("The Weather today is Normal.");
    }else if (temperature > 20 ) {
        alert("Today’s Weather is cool.");
    }else if (temperature > 10 ) {
        alert("OMG! Today’s weather is so Cool.");
    }else{
        alert("It's very cold today.");
    }






//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.

    var num1 = +prompt("Enter the first number:");
    var num2 = +prompt("Enter the second number:");
    var operation = prompt("Enter operation (+, -, *, /, %):");

    var result;

        if (operation === "+") {
            result = num1 + num2 ;
            alert("Result: " + result);
        }
        if (operation === "-") {
            result = num1 - num2;
            alert("Result: " + result);
          }
          if (operation === "*") {
            result = num1 * num2;
            alert("Result: " + result);
          }
          if (operation === "/") {
            if (num2 !== 0) {
              result = num1 / num2;
              alert("Result: " + result);
            } else {
              alert("Cannot divide by zero.");
            }
          }
          if (operation === "%") {
            if (num2 !== 0) {
              result = num1 % num2;
              alert("Result: " + result);
            } else {
              alert("Cannot divide by zero.");
            }
          }


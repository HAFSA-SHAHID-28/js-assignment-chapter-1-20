document.writeln("<br><br><br>");


//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
    document.writeln("<h2>Result:</h2>" + "<br>");
        var a = 10;
            document.writeln("The value of a is: " + a + "<br>");
                document.writeln("-----------------------------" + "<br><br>");

                    document.writeln("The value of ++a is: " + (++a) + "<br>");
                        document.writeln("Now the value of a is: " + a + "<br><br>");

                        document.writeln("The value of a++ is: " + (a++) + "<br>");
                    document.writeln("Now the value of a is: " + a + "<br><br>");

                document.writeln("The value of --a is: " + (--a) + "<br>");
            document.writeln("Now the value of a is: " + a + "<br><br>");

        document.writeln("The value of a-- is: " + (a--) + "<br>");
    document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("<br><br><br><hr><br><br><br>");





//2. What will be the output in variables a, b & result after execution of the following script:

var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
        document.write("Initial values: a = 2, b = 1 <br>");
            document.write("Step 1: --a => a = " + a + "<br>");
                document.write("Step 2: --b => b = 0 <br>");
                    document.write("Step 3: ++b => b = 1 <br>");
                document.write("Step 4: b-- => used as 1, then b becomes 0 <br><br>");
            document.write("Final result: " + result + "<br>");
        document.write("Value of a: " + a + "<br>");
    document.write("Value of b: " + b + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");




//3. Write a program that takes input a name from user & greet the user.
     var userName = prompt ("Enter your name!");
         document.writeln("<h2>Hello! " + userName + " <br> Welcome to our website.</h2>")

 document.writeln("<br><br><br><hr><br><br><br>");





//4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
    var number = +prompt("Enter a number to show its multiplication table:", 5); 
        document.writeln("<h2>Multiplication Table Of " + number + " <br></h2>")
            document.write(number + " x 1 = " + (number * 1) + "<br>");
                document.write(number + " x 2 = " + (number * 2) + "<br>");
                    document.write(number + " x 3 = " + (number * 3) + "<br>");
                        document.write(number + " x 4 = " + (number * 4) + "<br>");
                            document.write(number + " x 5 = " + (number * 5) + "<br>");
                            document.write(number + " x 6 = " + (number * 6) + "<br>");
                        document.write(number + " x 7 = " + (number * 7) + "<br>");
                    document.write(number + " x 8 = " + (number * 8) + "<br>");
                document.write(number + " x 9 = " + (number * 9) + "<br>");
            document.write(number + " x 10 = " + (number * 10) + "<br>");
        document.write(number + " x 11 = " + (number * 11) + "<br>");
    document.write(number + " x 12 = " + (number * 12) + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");



//5. Take
    //a) Take three subjects name from user and store them in 3 different variables.
        var subject1 = prompt("Enter first subject name!").toUpperCase();
            var subject2 = prompt("Enter second subject name!").toUpperCase();
                var subject3 = prompt("Enter third subject name!").toUpperCase();
                    //b) Total marks for each subject is 100, store it in another variable.
                        var totalMarksPerSubject = 100;
                    //c) Take obtained marks for first subject from user and stored it in different variable.
                var obtained1 = +prompt("Enter obtained marks for " + subject1);
            //d) Take obtained marks for remaining 2 subjects from user and store them in variables.
        var obtained2 = +prompt("Enter obtained marks for " + subject2);
    var obtained3 = +prompt("Enter obtained marks for " + subject3);
        var percentage1 = (obtained1 / totalMarksPerSubject) * 100;
            var percentage2 = (obtained2 / totalMarksPerSubject) * 100;
                var percentage3 = (obtained3 / totalMarksPerSubject) * 100;
                    //e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
                        var totalMarks = totalMarksPerSubject * 3;
                    var totalObtained = obtained1 + obtained2 + obtained3;
                var percentage = (totalObtained / totalMarks) * 100;
            document.write("<table border='1' cellpadding='15'>");
        document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    document.writeln("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained1 + "</td><td>" + percentage1 + "%" + "</td></tr>" );
        document.writeln("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained2 + "</td><td>" + percentage2 + "%" + "</td></tr>" );
            document.writeln("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtained3 + "</td><td>" + percentage3 + "%" + "</td></tr>" );
                document.writeln("<tr><th>       </th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage + "%" + "</th></tr>" );
                    document.write("</table>");


document.writeln("<br><br><br><hr><br><br><br>");



















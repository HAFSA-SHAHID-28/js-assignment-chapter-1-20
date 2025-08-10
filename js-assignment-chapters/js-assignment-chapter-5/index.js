document.writeln("<br><br><br>");


// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
    var number1 = 15;
        var number2 = 5;
            var sum = number1 + number2;
                document.writeln("Sum of " + number1 + " and " + number2 + " is " + sum + "<br><br>" );

document.writeln("<br><br><br><hr><br><br><br>");



                            // 2. Repeat task1 for subtraction, multiplication, division & modulus.
                                //subtraction
                                    var difference = number1 - number2;
                                        document.writeln("Subtraction of " + number1 + " and " + number2 + " is " + difference + "<br><br>");
                                //multiplication
                                    var product = number1 * number2;
                                        document.writeln("Multiplication of " + number1 + " and " + number2 + " is " + product + "<br><br>");
                                //division
                                    var quotient = number1 / number2;
                                        document.writeln("Division of " + number1 + " and " + number2 + " is " + quotient + "<br><br>");
                                //modulus
                                    var remainder = number1 % number2;
                                        document.writeln("Modulus of " + number1 + " and " + number2 + " is " + remainder + "<br><br>");

                            document.writeln("<br><br><br><hr><br><br><br>");



//3. Do the following using JS Mathematic Expressions
    //a. Declare a variable.
        var number;
        //b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
            document.writeln("Value after variable declaration is " + number + "<br><br>");
            //c. Initialize the variable with some number.
                number = 5;
                //d. Show the value of variable in your browser like “Initial value: 5”.
                    document.writeln("Initial value: " + number + "<br><br>");
                    //e. Increment the variable.
                        number++;
                        //f. Show the value of variable in your browser like “Value after increment is: 6”.
                            document.writeln("Value after increment is: " + number + "<br><br>");
                        //g. Add 7 to the variable.
                            number = number + 7;
                    //h. Show the value of variable in your browser like “Value after addition is: 13”.
                        document.writeln("Value after addition is: " + number + "<br><br>");
                //i. Decrement the variable.
                    number--;
            //j. Show the value of variable in your browser like “Value after decrement is: 12”.
                document.writeln("Value after decrement is: " + number + "<br><br>");
        //k. Show the remainder after dividing the variable’s value by 3.
            number = number % 3;
    //l. Output : “The remainder is : 0”.
        document.writeln("The remainder is : " + number + "<br><br>");

document.writeln("<br><br><br><hr><br><br><br>");




                            // 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
                                var price = 600;
                                     movieTicket = price * 5
                                        document.writeln("Total cost to buy 5 tickets to a movie is " + movieTicket + "PKR");

                            document.writeln("<br><br><br><hr><br><br><br>");






//5. Write a script to display multiplication table of any number in your browser. E.g
    var table = 4;
        document.writeln("<h2>Table of " + table + "</h2>");
            document.writeln(table + " x 1 = " + (table * 1) + "<br>");
                document.writeln(table + " x 2 = " + (table * 2) + "<br>");
                    document.writeln(table + " x 3 = " + (table * 3) + "<br>");
                        document.writeln(table + " x 4 = " + (table * 4) + "<br>");
                        document.writeln(table + " x 5 = " + (table * 5) + "<br>");
                    document.writeln(table + " x 6 = " + (table * 6) + "<br>");
                document.writeln(table + " x 7 = " + (table * 7) + "<br>");
            document.writeln(table + " x 8 = " + (table * 8) + "<br>");
        document.writeln(table + " x 9 = " + (table * 9) + "<br>");
    document.writeln(table + " x 10 = " + (table * 10) + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");





                            //6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
                                //Conversion Formulae: 1. C = (F − 32) × 5/9         2.F = (C × 9/5) + 32
                                    //a. Store a Celsius temperature into a variable.
                                        var celsius = 25;
                                    //b. Convert it to Fahrenheit & output “NNoC is NNoF”.
                                        var fahrenheit = (celsius * 9/5) + 32;
                                            document.writeln(celsius + " °C is " + fahrenheit + " °F" + "<br>");
                                    //c. Now store a Fahrenheit temperature into a variable.
                                        var fahrenheit2 = 70;
                                    //d. Convert it to Celsius & output “NNoF is NNoC”.
                                        var celsius2 = (fahrenheit2 - 32) * 5/9;
                                            document.writeln(fahrenheit2 + " °F is " + celsius2 + " °C" + "<br>");

                            document.writeln("<br><br><br><hr><br><br><br>");




//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
    document.writeln("<h2>Shopping Cart</h2>" + "<br>");
    //a. Price of item 1
        var item1Price = 650;
        //b. Price of item 2
            var item2Price = 100;
            //c. Ordered quantity of item 1
                var item1Qty = 3;
            //d. Ordered Quantity of item 2
                var item2Qty = 7;
        //e. Shipping charges
            var shippingCharges = 100;
    //Compute the total cost & .
        var totalCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;
//show the receipt in your browser
    document.writeln("Price of item 1 is " + item1Price + "<br>");
        document.writeln("Quantity of item 1 is " + item1Qty + "<br>");
            document.writeln("Price of item 2 is " + item2Price + "<br>");
            document.writeln("Quantity of item 2 is " + item2Qty + "<br>");
        document.writeln("Shipping charges " + shippingCharges + "<br><br>");
    document.writeln("Total cost of your order is " + totalCost + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");





                            //8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage 

                                var totalMarks = 980;
                                    var marksObtained = 804;
                                var percentage = (marksObtained / totalMarks) * 100;

                                //show the result in your browser
                                    document.writeln("<h2>Marks Sheet</h2>" + "<br>");
                                        document.writeln("Total Marks: " + totalMarks + "<br>");
                                        document.writeln("Marks Obtained: " + marksObtained + "<br>");
                                    document.writeln("Percentage: " + percentage + "%" + "<br>");

                            document.writeln("<br><br><br><hr><br><br><br>");





//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
    var usDollar = 10;
        var saudiRiyals = 25;
            var totalPkr = (usDollar * 104.80) + (saudiRiyals * 28);
            //output
        document.writeln("<h2>Currency In PKR</h2>" + "<br>");
    document.writeln("Total Currency in PKR:" + totalPkr + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");





                            //10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
                                //a. Add 5
                                    //b. Multiply by 10
                                        //c. Divide the result by 2
                                            //Perform all calculations in a single expression
                                            var numberInitialize = 5;
                                        var arithmeticCalculation = ((numberInitialize + 5) * 10) / 2;
                                    document.writeln("Initialize Number =" + numberInitialize  + "<br>");
                                document.writeln("Final Result = " + arithmeticCalculation + "<br>");

                            document.writeln("<br><br><br><hr><br><br><br>");




//11. The Age Calculator: Forgot how old someone is? Calculate it!
    //a. Store the current year in a variable.
        var currentYear = 2025;
            //b. Store their birth year in a variable.
                var birthYear = 2007;
                    //c. Calculate their 2 possible ages based on the stored values.
                        var age1 = currentYear - birthYear;
                        var age2 = age1 - 1;
                    //Output them to the screen like so: “They are either NN or NN years old”.
                document.writeln("<h2>Age Calculator</h2>" + "<br>");
            document.writeln("Current Year: " + currentYear  + "<br>");
        document.writeln("Birth Year: " + birthYear  + "<br>");
    document.writeln("They are either " + age1 + " or " + age2 + " years old" + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");


 


                            //12. The Geometrizer: Calculate properties of a circle.
                                //(Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
                                    //a. Store a radius into a variable.
                                        //b. Calculate the circumference based on the radius.
                                            var radius = 25;
                                                var pie = 3.142;
                                                    var circumference = 2 * pie * radius;
                                                    var area = pie * radius * radius;
                                                //output “The circumference is NN”.
                                            document.writeln("<h2>The Geometrizer</h2>" + "<br>");
                                        document.writeln("Radius of a circle: " + radius + "<br>");
                                    document.writeln("The circumference is " + circumference + "<br>");
                                document.writeln("The area is " + area + "<br>");
                            document.writeln("<br><br><br><hr><br><br><br>");






//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
    //a. Store your favorite snack into a variable.
        var favoriteSnack = "Chocolate Chip Cookies";
            //b. Store your current age into a variable.
                var currentAge = 18;
                    //c. Store a maximum age into a variable.
                        var maxAge = 80;
                            //d. Store an estimated amount per day (as a number).
                                var amountPerDay = 4;
                                    //e. Calculate how many would you eat total for the rest of your life.
                                    var yearsRemain = maxAge - currentAge;
                                var totalNeed = yearsRemain * 365 * amountPerDay;//multiply by 365 bcoz each year has 365 days so we have to convert the years in days first oyherwise the calculation becomes wrong
                            //Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
                        document.writeln("<h2>The Lifetime Supply Calculator</h2>" + "<br>");
                    document.writeln("Favorite Snack: " + favoriteSnack + "<br>");
                document.writeln("Current Age: " + currentAge + "<br>");
            document.writeln("Estimated Maximum Age: " + maxAge + "<br>");
        document.writeln("Amount of Snack Per Day: " + amountPerDay + "<br>");
    document.writeln("You will need " + totalNeed + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");














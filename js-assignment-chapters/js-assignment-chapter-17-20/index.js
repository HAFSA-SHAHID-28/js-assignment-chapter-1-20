document.writeln("<br><br><br>");

//1. Declare and initialize an empty multidimensional array. (Array of arrays)
    var multiDimension = [[], [[], ], []];


//2. Declare and initialize a multidimensional array representing the following matrix:
    var multipleValues = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]
    ];
    console.log(multipleValues);



//3. Write a program to print numeric counting from 1 to 10.
   document.writeln("<h2>COUNTING FROM 1 - 10</h2><br><br>")
    for (var i = 1; i <= 10 ; i++) {
      document.write(i + "<br>");
    }

    document.writeln("<br><br><br><hr><br><br><br>");




//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
    var tableNumber = +prompt("Enter a number for multiplication table :");
    var tableLength = +prompt("Enter the length of the table :");
    document.writeln("<h2>MULTIPLICATION TABLE OF " + tableNumber + "</h2><br><br>")
    for (var i = 1; i <= tableLength; i++) {
        var result = tableNumber * i;
        document.write(tableNumber + " x " + i + " = " + result + "<br>");
    }

document.writeln("<br><br><br><hr><br><br><br>");






//5. Write a program to print items of the following array using for loop:
    var fruits = ["apple", "banana", "mango", "orange","strawberry"];
        for (var i = 0; i < fruits.length; i++) {
            document.write(fruits[i] + "<br>");
                }
                    document.write("<br>");
                        for (var i = 0; i < fruits.length; i++) {
                            document.write("Element at index " + i + " is " + fruits[i] + "<br>");
                                }

document.writeln("<br><br><br><hr><br><br><br>");






//6. Generate the following series in your browser. See example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<b>Counting:</b><br>");
    for (var i = 1; i <= 15; i++) {
        document.write(i + ", ");
            }
                document.writeln("<br><br>");
                    //b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
                        document.write("<b>Reverse Counting:</b><br>");
                            for (var i = 10; i >= 1; i--) {
                                document.write(i + ", ");
                                    }
                                        document.writeln("<br><br>");
                                                //c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
                                                    document.write("<b>Even:</b><br>");
                                                        for (var i = 0; i <= 20; i+=2) {
                                                            document.write(i + ", ");
                                                            }
                                                        document.writeln("<br><br>");
                                                    //d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
                                                document.write("<b>Odd:</b><br>");
                                            for (var i = 1; i <= 19; i+=2) {
                                        document.write(i + ", ");
                                    }
                                document.writeln("<br><br>");
                        //e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
                    document.write("<b>Series:</b><br>");
                for (var i = 2; i <= 20; i+=2) {
            document.write(i + "k, ");
        }
    document.writeln("<br><br>");

document.writeln("<br><br><br><hr><br><br><br>");








//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
    var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
        var userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();
            var indexItem = bakery.indexOf(userInput);
                if (indexItem !== -1) {
                    document.write(userInput + " is <b>available</b> at index " + indexItem + " in our bakery.");
                        }else{
                            document.write("We are sorry! " + userInput + " is not <b>available</b> in our bakery.");
                                }

document.writeln("<br><br><br><hr><br><br><br>");








//8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
    var number = [24, 53, 78, 91, 12];
        document.writeln("Array items: " + number + "<br>");
            var largest = number[0];
                for (var i = 1; i < number.length; i++) {
                    if (number[i] > largest) {
                        largest = number[i]
                            }
                                }
                                    document.writeln("The largest number is " + largest);
document.writeln("<br><br><br><hr><br><br><br>");





//9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
var number = [24, 53, 78, 91, 12];
        document.writeln("Array items: " + number + "<br>");
            var smallest = number[0];
                for (var i = 1; i < number.length; i++) {
                    if (number[i] < smallest) {
                        smallest = number[i]
                            }
                                }
                                    document.writeln("The smallest number is " + smallest);
document.writeln("<br><br><br><hr><br><br><br>");







//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("<b>Multiples of 5 (1 to 100):</b> <br>");
    for (var i = 5; i <= 100; i+=5) {
        document.write(i + ", ");
    }

document.writeln("<br><br><br><hr><br><br><br>");














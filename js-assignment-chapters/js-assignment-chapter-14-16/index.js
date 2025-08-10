document.writeln("<br><br><br>");


//1. Declare an empty array using JS literal notation to store student names in future.
    var studentNames = [];





//2. Declare an empty array using JS object notation to store student names in future.
    var studentNames = new Array();





//3. Declare and initialize a strings array.
    var fruits = ["apple","banana","grapes","mango"];



//4. Declare and initialize a numbers array.
    var numbers = [1,2,3,4,5,6,7,8,9];




//5. Declare and initialize a boolean array
    var flags = [true, false, true];




//6. Declare and initialize a mixed array.
var mixed = ["books", 55, null, true];






//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
        var qualificationPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
            document.writeln("<h2>QUALIFICATION:</h2> <br><br>");
                document.writeln("1) " + qualificationPak[0] + "<br>");
                    document.writeln("2) " + qualificationPak[1] + "<br>");
                        document.writeln("3) " + qualificationPak[2] + "<br>");
                        document.writeln("4) " + qualificationPak[3] + "<br>");
                    document.writeln("5) " + qualificationPak[4] + "<br>");
                document.writeln("6) " + qualificationPak[5] + "<br>");
            document.writeln("7) " + qualificationPak[6] + "<br>");
        document.writeln("8) " + qualificationPak[7] + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");





//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
    var studentNames = ["Ali", "Ahmed", "Umer"];  
        var studentScores = [220, 350, 450];  
            var totalMarks = 500;
                document.writeln("<h2>RESULT:</h2> <br><br>");
            document.writeln("Score of " + studentNames[0] + " is " + studentScores[0] + ". Precentage : " + (studentScores[0] / totalMarks) * 100 + " %<br>");
        document.writeln("Score of " + studentNames[1] + " is " + studentScores[1] + ". Precentage : " + (studentScores[1] / totalMarks) * 100 + " %<br>");
    document.writeln("Score of " + studentNames[2] + " is " + studentScores[2] + ". Precentage : " + (studentScores[2] / totalMarks) * 100 + " %<br>");

document.writeln("<br><br><br><hr><br><br><br>");








//9. Initialize an array with color names. Display the array elements in your browser.
        var colors = [" orange ", " blue ", " purple ", " grey ", " black ", " white"];
            document.write("<b>Original colors :</b> " + colors + "<br>");
                //a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
                    var ColorBeginning = prompt("Which color do you want to add at the beginning?");
                        colors.unshift(ColorBeginning);
                            document.write("<b>After adding to beginning :</b> " + colors + "<br>");
                                //b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
                                var ColorEnd = prompt("Which color do you want to add to the end?");
                            colors.push(ColorEnd);
                        document.write("<b>After adding to end :</b> " + colors + "<br>");
                    //c. Add two more color to the beginning of the array. Display the updated array in your browser.
                colors.unshift(" brown ", " maroon ");
            document.write("<b>After adding 2 colors to beginning :</b> " + colors + "<br>");
        //d. Delete the first color in the array. Display the updated array in your browser.
        colors.shift();
            document.write("<b>After removing first color :</b> " + colors + "<br>");
                //e. Delete the last color in the array. Display the updated array in your browser.
                    colors.pop();
                        document.write("<b>After removing last color :</b> " + colors + "<br>");
                            //f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
                                var addIndex = +prompt("At which index do you want to add a color?");
                                var addColor = prompt("Enter a color name you want to add:");
                            colors.splice(addIndex, 0, addColor);
                        document.write("<b>After adding color at index " + addIndex + " :</b> " + colors + "<br>");
                    //g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
                var delIndex = +prompt("At which index do you want to delete color(s)?");
            var deleteCount = +prompt("How many colors do you want to delete?");
        colors.splice(delIndex, deleteCount);
        document.write("<b>After deleting from index " + delIndex + " :</b> " + colors + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");








//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
    document.writeln("<h2>SCORES OF STUDENT:</h2> <br><br>");
        var scoreStudent = [220, 350, 450, 66, 121, 43]; 
            document.writeln("scores of students : " + scoreStudent + "<br>");
                for( var i = 0; i < scoreStudent.length; i++ ){
                    for( var j = 0; j < scoreStudent.length; j++ ){
                        if (scoreStudent[j] > scoreStudent [j+1]) {
                            var num = scoreStudent[j];
                        scoreStudent[j] = scoreStudent [j+1];
                    scoreStudent [j+1] = num ;
                }
            }
        }
    document.writeln("Ordered scores of students : " + scoreStudent + "<br>");

document.writeln("<br><br><br><hr><br><br><br>");







//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
    var city = [ "Peshawar" , "Quetta" , "Karachi" , "Lahore" , "Islamabad" , "Multan"];
        var selectedCities = [];
            selectedCities = city.slice( 2, 5 );
                document.writeln("<h2>CITIES</h2> <br><br>");
            document.writeln("Cities List : " + "<br>" + city + "<br><br>");
        document.writeln("Selected Cities List : " + "<br>" + selectedCities + "<br><br>");

    document.writeln("<br><br><br><hr><br><br><br>");






//12. Write a program to create a single string from the below mentioned array:
    var arr = ["This ", "is ","my ", "cat"];
        var joinSentence = arr.join("");
            document.writeln("<h2>SINGLE STRING</h2> <br><br>");
            document.writeln("Array : " + "<br>" + arr + "<br><br>");
        document.writeln("String : " + "<br>" + joinSentence + "<br>");

    document.writeln("<br><br><br><hr><br><br><br>");






//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
        var devices = ["keyboard", "mouse", "printer", "monitor"];
            document.writeln("<h2>REMOVING ONE BY ONE</h2> <br><br>");
                document.writeln("Devices : " + "<br>" + devices + "<br><br>");
                    while (devices.length > 0) {
                        var device = devices.shift();  
                            document.writeln("out : " + device + "<br>");
                                }

      document.writeln("<br><br><br><hr><br><br><br>");





//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)
var devices = ["keyboard", "mouse", "printer", "monitor"];
            document.writeln("<h2>REMOVING ONE BY ONE</h2> <br><br>");
                document.writeln("Devices : " + "<br>" + devices + "<br><br>");
                    while (devices.length > 0) {
                        var device = devices.pop();  
                            document.writeln("out : " + device + "<br>");
                                }

document.writeln("<br><br><br><hr><br><br><br>");




//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//Display the following dropdown/select menu in your browser using document.write() method:

    var manufactures = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
        document.writeln("<h2>DROP-DOWN MENU</h2> <br><br>");
            document.write('<select>');
                for (var i = 0; i < manufactures.length; i++) {
                    document.write('<option value="' + manufactures[i] + '">' + manufactures[i] + '</option>');
                        }
                            document.write('</select>');

document.writeln("<br><br><br><hr><br><br><br>");














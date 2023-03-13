/* Assignment # 21-25
JAVASCRIPT 

1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name 
Assignment # 21-25
JAVASCRIPT */


var firstName = prompt("Enter your First Name")
var lastName = prompt("Enter your Last Name")
var fullName = firstName + " " + lastName

alert("Hello " + fullName + "!");

// 2. Write a program to take a user input about his favorite mobile phone model.
// Find and display the length of user input in your browser

document.write("<h3>Question 02 </h3>")
var mobile = prompt("Enter your favorite mobile phone model")

document.write("My favourite Phone is " + mobile + "<br>")
document.write("Length of string " + mobile.length + "<br>")

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
document.write("<h3>Question 03 </h3>")

var word = "Pakistani"
var index = word.indexOf("n")

document.write("The index of Letter n in the world " + word + " " + "is" + " " + index + "<br>");

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
document.write("<h3>Question 04 </h3>")

var letter = "Hello World"
var lastIndex = letter.lastIndexOf("l")

document.write("String is" + " " + letter + "<br>")
document.write("Last index of l is" + " " + lastIndex + "<br>")

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
document.write("<h3>Question 05 </h3>")

var words = "Pakistani";
var char = words.charAt(3);

document.write("Character at 3rd index in the word " + words + " " + "is " + char + "<br>")

// 6. Repeat Q1 using string concat() method.
document.write("<h3>Question 06 </h3>")

var userFirstName = prompt("Enter your first name");
var userLastName = prompt("Enter your last name");

var userFullName = userFirstName + " " + userLastName;

document.write("Hello Your Full Name is" + " " + userFullName + "<br>");

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
document.write("<h3>Question 07 </h3>")

var city = "Hyderabad";
document.write("City:" + " " + city + "<br>");
var result = city.replace("Hyder", "Islam");

document.write("After Replacement:" + " " + result + "<br>");

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;
document.write("<h3>Question 08 </h3>")

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Text Before Replacement:" + " " + message + "<br>");

var newMessage = message.replaceAll("and", "&");
document.write("Text After Replacement:" + " " + newMessage + "<br>");

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
document.write("<h3>Question 09 </h3>")

var num = "472";
document.write("Value In String:" + " " + num + "<br>")

document.write("Type:" + " " + typeof num + "<br>")

var nums = Number(num);
document.write("Value In Number:" + " " + nums + "<br>")
document.write("Type:" + " " + typeof nums + "<br>")


// 10. Write a program that takes user input. Convert and show the input in capital letters.
document.write("<h3>Question 10 </h3>");

var userInput = prompt("Enter your Name");

document.write("User Input:" + " " + userInput + "<br>");

var upperCase = userInput.toUpperCase();
document.write("Upper Case:" + " " + upperCase + "<br>");

// 11. Write a program that takes user input. Convert and show the input in title case.
document.write("<h3>Question 11 </h3>");

var userValue = prompt("Enter your First Name");
document.write("User Input:" + " " + userValue + "<br>");

var titleCase = userValue[0].toUpperCase();
var result = titleCase + userValue.slice(1);

document.write("Title Case:" + " " + result + "<br>");

// 12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.
document.write("<h3>Question 12 </h3>");

var num = 35.36
document.write("Value in Number:" + " " + num + "<br>");
var str = num.toString().replace(".", "");
document.write("Value in string:" + " " + str + "<br>");
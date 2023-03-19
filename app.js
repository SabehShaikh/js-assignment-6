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

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !],
// prompt the user to enter a valid username. For character codes of [@ .
// document.write("<h3>Question 13 </h3>");

// WE CAN DO THIS METHOD
// document.write("<h3>Question 13</h3>");

// var userInputName = prompt("Enter your username");

// if (userInputName.includes("@") || userInputName.includes(".") || userInputName.includes(",") || userInputName.includes("!")) {
//     alert("Enter a valid username without special characters [@ . , !]");
// } else {
//     alert("Your username is valid: " + userInputName);
// }

// OR THIS METHOD AS WELL
document.write("<h3>Question 13</h3>");

var userInputName = prompt("Enter your username");

for (var i = 0; i < userInputName.length; i++) {
    var charCode = userInputName.charCodeAt(i);
    if (charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64) {
        alert("Enter a valid username without special characters [@ . , !]");
        break;
    }
}

if (i == userInputName.length) {
    alert("Your username is valid: " + userInputName);
}

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the givenitem is found in the list or not. Note: Perform case insensitive search.
// Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

document.write("<h3>Question 14 </h3>");

// Define the array of items
var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// Ask the user to enter an item to search
var order = prompt("Welcome to our Bakery, What to want to Order?");

// Convert the user input to lowercase for case-insensitive search
order = order.toLowerCase();

// Initialize a flag to keep track of whether the item is found or not
var isFound = false;

// Loop through the array and check if the item is present
for (var i = 0; i < items.length; i++) {
    // Convert the array element to lowercase for case-insensitive search
    var items = items[i].toLowerCase();

    // Check if the item matches the user's input
    if (items === order) {
        // If the item is found, set the flag to true and break out of the loop
        isFound = true;
        break;
    }
}

// Display the result based on whether the item is found or not
if (isFound) {
    alert(order + " is found in the list.");
} else {
    alert(order + " is not found in the list.");
}

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a.It should contain alphabets and numbers
// b.It should not start with a number
// c.It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password.
//For character codes of a - z, A - Z & 0 - 9, refer to ASCII table at the end of this document.

document.write("<h3>Question 15</h3>");

// Prompt user to enter password
var password = prompt("Enter a password: ");

// Initialize variables to check if password meets requirements
var hasLetter = false;
var hasNumber = false;
var startsWithLetter = false;

// Check if password meets requirements
for (var i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i);

    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        // Check if password has at least one letter
        hasLetter = true;

        if (i == 0) {
            // Check if password starts with a letter
            startsWithLetter = true;
        }
    } else if (charCode >= 48 && charCode <= 57) {
        // Check if password has at least one number
        hasNumber = true;
    }
}

// Check if password meets all requirements
if (hasLetter && hasNumber && startsWithLetter && password.length >= 6) {
    alert("Password is valid!");
} else {
    alert("Password is invalid. Please enter a valid password.");
}

// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

document.write("<h3>Question 16 </h3>");

var university = "University of Karachi";

var split = university.split(" ");

for (var i = 0; i < split.length; i++) {
    document.write(split[i] + "<br>");
}

// 17. Write a program to display the last character of a user input.

document.write("<h3>Question 17 </h3>");

var char = prompt("Enter string");
document.write("User Input:" + " " + char + "<br>");

var lastChar = char.charAt(char.length - 1);
document.write("The last character of the string is: " + lastChar + "<br>");

// 18. You have a string “The quick brown fox jumps over the lazy dog”.
// Write a program to count number of occurrences of word “the” in given string.
document.write("<h3>Question 18 </h3>");

var txt = "The quick brown fox jumps over the lazy dog"
document.write("TEXT:" + " " + txt + "<br>");

var count = 0;
var words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "the") {
        count++;
    }
}

document.write("The word 'the' appears " + count + " times in the string.");
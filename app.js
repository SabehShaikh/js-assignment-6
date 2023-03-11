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

var mobile = prompt("Enter your favorite  mobile phone model")

document.write("My favourite Phone is " + mobile + "<br>")
document.write("Length of string " + mobile.length + "<br>")

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var word = "Pakistani"
var index = word.indexOf("n")

document.write("The index of Letter n in the world " + word + " " + "is" + " " + index + "<br>");

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var letter = "Hello World"
var lastIndex = letter.lastIndexOf("l")

document.write("String is" + " " + letter + "<br>")
document.write("Last index of l is" + " " + lastIndex + "<br>")

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var words = "Pakistani";
var char = words.charAt(3);

document.write("Character at 3rd index in the word " + words + " " + "is " + char + "<br>")

// 6. Repeat Q1 using string concat() method.
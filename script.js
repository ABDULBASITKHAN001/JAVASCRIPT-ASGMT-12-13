/////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("HELLO-WORLD");

// QUESTION NUMBER 01 : CHECK WHAT IS THE GIVEN INPUT : NUMBER , UPPERCASE , LOWERCASE ///////////////////////
console.log("");

// Prompt the user to enter a character

console.log("THIS IS A PROGRAM TO CHECK WHEATHER THE INPUT IS NUMBER , UPPERCASE OR LOWERCASE :")
var  input = prompt("Enter a single character:");
// Ensure only a single character is processed
if (input.length !== 1) {
    alert("Please enter only a single character.");
} else {
    var  Code = input.charCodeAt(0); 

    // Check the type of character
    if (Code >= 48 && Code <= 57) {
        console.log("The input is a Number.");
    } else if (Code >= 65 && Code <= 90) {
        console.log("The input is an Uppercase letter.");
    } else if (Code >= 97 && Code <= 122) {
        console.log("The input is a Lowercase letter.");
    } else {
        console.log("The input is neither a Number nor a Letter.");
    }
}


console.log("");
// QUESTION NUMBER 02 : """""""" INTEGERS """""""" //////////////////////////////////////////////////////////
console.log("HERE WE CHECK WHICH GIVIN INPUT IS GREATER OR EQUAL:");
alert("YOU HAVE TO ENTER ONLY TWO NUMBERS")
var num1 = Number(prompt("ENTER FIRST NUMBER :"));
var num2 = Number(prompt("ENTER SECOND NUMBER :"));

// CHECK BOTH NUMBERS ARE INTEGERS 
if(num1 > num2){
    console.log("THE FIRST NUMBER IS GREATER")
}else if(num2 > num1 ){
    console.log("THE SECOND NUMBER IS GREATER")
}else if(num1 === num2){
    console.log("THE NUMBERS ARE EQUAL")
}else{
    console.log("ENTER VALID NUMBER ")
}


console.log("");
// QUESTION  NUMBER 03 :  CHECKING WHEATHER THE INPUT IS POSITIVE OR NEGATIVE OR ZERO /////////////////////////
console.log("HERE WE CHECK WHICH GIVEN INPUT IS POSITIVE OR NEGATIVE OR ZERO ");
var num = Number(prompt("PLEASE ENTER SINGLE NUMBER !"));
if (num > 0 ){
    console.log("THE GIVEN NUMBER IS POSITIVE");
}else if(num < 0){
    console.log("THE GIVEN  NUMBER IS NEGATIVE")
}else if(num === 0){
    console.log("THE GIVEN NUMBER IS ZERO")
}else{
    console.log("PLEASE ENTER VALID NUMBER")
}


 console.log("");
// // QUESTION NUMBER 04 : CHECKING WHEATHER THE INPUT IS VOWEL OR NOT; /////////////////////////////////////
console.log("CHECKING INPUT WHEATHER IT IS VOWEL OR NOT: ")
function isVowel(char) {
    // Ensure the input is a single character
    if (char.length !== 1) {
        return false;
    }
    // Define vowels
    var vowels = "aeiouAEIOU";
    return vowels.includes(char);
}

var  input = prompt("Enter a Single Character:");
if (isVowel(input)) {
    console.log(input ," is a Vowel.");
} else {
    console.log(input, "is not a Vowel.");
}


console.log("");
// QUESTION NUMBER 05 : ENTER PASSWORD  //////////////////////////////////////////////////////////////////////
console.log("YOU HAVE ENTER YOUR PASSWORD HERE YOUR PASSWORD IS : " );
var password = "mypassword";
// enter your password;
var userpass = prompt("ENTER YOUR PASSWORD PLEASE");

if (!userpass){
    console.log("PLEASE ENTER PASSWORD !");
}else if(password === userpass ){
    console.log("CORRECT PASSWORD ! ")
}else{
    console.log("INCORRECT PASSWORD ! , PLEASE TRY AGAIN !")
}


console.log("");
//QUESTION NUMBER 06 : CORRECTING THE  IF/ELSE STATEMENTS ;  /////////////////////////////////////////////////
console.log("CHECKING THE IF/ELSE STATEMENTS:") 
var greeting;
var hour = Number(prompt("ENTER HOURS "))

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);


console.log("");
// QUESTION  NUMBER 07  : CONVERTING 24-HOURS CLOCK INTO 12-HOURS CLOCK,  USING IF & ELSE & ELSE IF ; //////// 
console.log("THIS IS CONVERTER OF 24-HOURS FORMAT TIME INTO 12-HOURS FORMAT TIME : ")
var time = Number(prompt("Enter The Time In 24-Hour Format (e.g., 1900 for 7 PM):"));

if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night!");
} else {
    console.log("Invalid time! Please enter a valid 24-hour clock format (0000 to 2359).");
}

/////////////////////////////// CHAPTER 12-13 COMPLETED \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
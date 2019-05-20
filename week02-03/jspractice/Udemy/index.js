// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = firstNum + secondNum;
// console.log(total);
// total = 500 + 100 /5 +total;
// console.log(total);

// Mile to Kilometers Converters:
/*
let message = prompt('Input the number of miles:');
console.log(message);
message = Number(message);
console.log(message);
let conversion = message * 1.60934;
console.log(conversion);

let total = `Your total is ${conversion} km when you run ${message} miles.`;
console.log(total);*/


// Operators:
// let checkNum = 5;
// if (checkNum) {
//     console.log('Number Exists');
// } 
// if (checkNum > 50){
//     console.log('This number is greater than 50.');
// } else {
//     console.log('This number is less than 50.')
// }
// console.log(checkNum);


// // Ternary Operator:
// let val = 3;
// let status = (val%2)? "odd":"even";
// console.log(val);
// console.log(status);

// Ternary Challenge
// let userAge= prompt('How old are you?');
// let usermember = true;
// userAge = Number(userAge);

// let message = userAge >=17 ? "Allowed" : "Denied";
// console.log(message);

// More complex:
// let userAge = prompt('How old are you?');
// console.log(userAge);
// userAge = Number(userAge);
// let message = (userAge >= 17) ? "Allow" : "Deny";
// console.log(message);

// let member = "Laurence";
// let userMember = (member === "Laurence");

// if(userAge >= 17 && userMember){
//     console.log("Yes allow");
// } else {
//     console.log("Access Denied");
// }

// Hello Greeter:
// let myTime= 22;
// let output;

// if(myTime < 11) {
//     output = "Good Morning";
// } else if(myTime >= 11 && myTime <= 17){
//     output = 'Good Afternoon';
// } else if(myTime > 17 && myTime < 23){
//     output = "Good Evening";
// } else {
//     output = "I'm sleeping";
// }
// console.log("time is " + myTime);
// console.log(output);

// Switch Statement:
// let person = "Laurence";

// switch (person){
//     case "John":
//     console.log(person + "is not my friend");
//     break;
//     case "Laurence":
//     console.log("found it")
//     break;
//     case "Steve":
//     console.log("Hi Steve");
//     break;
//     default:
//     console.log("Nobody found");
// }

// Functions:

// let output = "Hello World";
// let counter = 0;
// hello(output);
// hello(output);
// hello(output);

// function hello(message) {
//     counter++
//     let temp = counter + " times run";
//     console.log(message);
//     console.log(temp);
// }

// let myNum = 50;
// addTen(myNum);

// function addTen(num) {
//     let temp = Number(num);
//     console.log(temp+10);
// }

// Function Parameters
// Creating 3 different ways to set a default value if a function is missing an arguement value:
// Did not understand this, number 25 on UDEMY

// Create a function that multiplies two values and returns the result:
// let num1 = 5;
// let num2 = 10;
// function multiplier(a,b){
//     let total = a * b;
//     return total;
// }
// console.log(multiplier(num1,num2));

// Create 3 buttons that will each update a different global variable. Output the current values of each variable in the console.

// let var1 = 0;
// let var2 = 0;
// let var3 = 0;

// function message1(){
//     var1++;
//     message();
// }
// function message2(){
//     var2++
//     message();
// }
// function message3(){
//     var3++
//     message();
// }
// function message(){
//     console.log(var1 + '' + var2 + '' + var3);
// }



// Now using query selector:
// const btns = document.querySelectorAll('button');
// console.log(btns);

// btns[0].onclick = message1;
// btns[1].onclick = message2;
// btns[2].onclick = message3;

// let var1 = 0;
// let var2 = 0;
// let var3 = 0;

// function message1(){
//     var1++;
//     message();
// }
// function message2(){
//     var2++
//     message();
// }
// function message3(){
//     var3++
//     message();
// }
// function message(){
//     console.log(var1 + '' + var2 + '' + var3);
// }


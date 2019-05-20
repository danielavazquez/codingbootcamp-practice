
// SALARY 1:
// let salary = 20;
// let monthlySalary = 21 * 8;
// let total = salary * monthlySalary;
// console.log(total - (total * 0.25));

// SALARY 2:
// let hours = 9 + 7 + 5.5 + 6 + 2;
// let average = hours / 5;
// console.log(average);

// SALARY 2:
// let text = 'Your average salary is:';
// let amount = ' 2500 euros';
// console.log(text+amount);

// SALARY WITH VARIABLES:
// let pay = 10;
// let hours = 8;
// let days = 30;
// let salary = (pay*hours*days)
// console.log(salary);

// STUDY TIME:
// const classHours = 7 * 4 + 3;
// let studyHours = classHours * 0.3 + classHours;
// let totalStudyTime = classHours * 12;
// console.log(totalStudyTime);

// let message = 'Total study time: 400 hours';
// console.log(message);
// let studyMessage = 'Total study time:' +  totalStudyTime +' hours';
// console.log(studyMessage);

// ASK HERE ^ BECAUSE OF SPACING uncomment this paragraph and the next

// BIRTH YEAR:
// birthYear = prompt('What is your birth year?')
// result = parseInt(birthYear);
// usersAge = 2019 - result;
// alert(usersAge);

// CHECK THIS ONE AS WELL ^

// SALARY 1 WITH ALERTS AND PROMPTS:
// wage = prompt('What is your hourly wage?')
// hours = prompt('How many hours per day do you work?')
// days = prompt('How many days per week do you work?')
// calculation = wage * hours * days;
// alert(calculation);

// // CURRENCY EXCHANGE
// euro = prompt('How many euros do you have?');
// czech = prompt(euro * 25.695);
// finalExchange= Math.ceil(czech);
// alert(finalExchange);
// CHECK THIS ONE FOR ROUNDING TO NEAREST WHOLE NUMBER AND ADDING A DOLLAR SIGN

// RANDOM NUMBERS

// console.log(
//    Math.floor( 1 + Math.random() * 5)
// );

// We add a 1 ^ so we do not get a decimal because we want whole integers. We then multiply by 5 because that is our max. Math.ceil rounds up and Math.floor rounds down

// DICE ROLL
// console.log(
//     Math.floor (1 + Math.random() *6)
// );

// WORKING HOURS:
// let hours = [5,5,6,6,7,6,7]

// console.log(
//     hours[6]
// );

// it is not asking you to input sunday or even use it, just so you know about indexing


// WRITING YOUR OWN FUNCTIONS:
// MATHEMATICAL FUNCTIONS:

// 1. const square = (number) => {
//     return number **2;
// };
// 2. const hypotenuse = (a,b) => {
//     return Math.sqrt (a**2 + b**2)
// }; 
// //  square (a) + square (b) in simple form to replace the above return of (a**2 + b**2)

// // SALARY FUNCTION:
// const salary = (pay,hours,days) => {
//     return (pay * hours) * days;
// };
// console.log(
// salary(10,8,5)
// );

// const taxedSalary = (salary, tax) => {
//     return salary * (1-tax);
// };
// //  how to compute:
// const MySalary = taxedSalary (salary (20,8,21), 0.25); 


// // CONTROL FLOW:
// Salary 1 as a page
// function salary(pay,hours,days) {
//     return (pay * hours) * days;
// }
// function taxedSalary(salary,tax) {
//     return salary - (salary * tax);
// }
// let pay = parseInt(prompt('What is your hourly pay?'));
// let hours = parseInt(prompt('What are hours worked per day?'));
// let days = parseInt(prompt('How many days do you work per month?'));

// console.log(
//     'Your salary is ' + taxedSalary(salary(pay,hours,days),0.25) + ' euros after tax');


// RANDOM NUMBERS PAGE:
//    random number 1 -6 everytime you refresh it
// console.log(
//     Math.floor (1 + Math.random() * 6)
// );

// ask user for a number limit, then use it to make that the max and give a random number everytime
// let limit = parseInt(prompt('Input a number limit'));
// console.log(
//     Math.floor ( 1 + Math.random() * limit)
// );

// let min = prompt('What is the min?');
// let max = prompt('What is the max?');

// console.log(
//     Math.floor(parseInt(min) + (Math.random() * (max-parseInt(min))))
// );

// LOGIN:

// let login = prompt('What is your username?');
// let password = prompt('What is your password?');

// if(password === 'sore-thumb-218'){
//     console.log ('Access granted')
// } else {
//     console.log ('Nice try.')
// }


// let passwordb= prompt('Create a password');

// let password2 = prompt('Re-type Password');

// if (passwordb !== password2) {
//     console.log('Your passwords are not a match');
// }   

// let password = prompt('What is your password?');

// let notSecure = prompt('Your password is not secure, please retype');

// let stupid = 'You are stupid';

// if (password.length <= 8) {
//     console.log(notSecure);
// } else {
//     console.log('Your password is mighty strong!');
// };

// let price = '12';
// let age = prompt('What is your age?');

// if (age <= 6){
//     price = 0;
// } else if (age <= 15){
//     price = price * (1 - 0.35);
// } else if (age <= 26 ){
//     price = price * (1 - 0.65);
// } else if (age <= 64){
//     price = price;
// } else {
//     price = price * 0.50;
// }
// console.log('You will pay ' + price);


    

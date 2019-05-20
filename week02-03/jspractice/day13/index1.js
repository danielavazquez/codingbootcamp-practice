const account1 = '000256784';
const account2 = '000986056';
const account3 = '001546238';
const account4 = '030987456';

let balance1 = 790;
let balance2 = 5600;
let balance3 = 78065;
let balance4 = 120910;

let userAccount = prompt('Your account number:');
let userAction = prompt('Your Action:')

if(userAction === 'balance') {
  let userBalance = null;

  if(userAccount === account1) {
    userBalance = balance1; 
  } else if(userAccount === account2) {
    userBalance = balance2;
  } else if(userAccount === account3) {
    userBalance = balance3;
  } else if(userAccount === account4) {
    userBalance = balance4;
  }

  if(userBalance === null) {
    alert('Incorrect account number');
  } else {
    alert('Your balance is: ' + userBalance);
  }
} else if(userAction === 'withdraw') {
  let amount = parseInt(prompt('Amount to withdraw:'));
  
  if(userAccount === account1) {
    balance1 -= amount; 
  } else if(userAccount === account2) {
    balance2 -= amount;
  } else if(userAccount === account3) {
    balance3 -= amount;
  } else if(userAccount === account4) {
    balance4 -= amount;
  }
} else {
  alert('Uknown action. Are you stupid?')
}


numbersArray = ['000256784',' 000986056', '001546238','030987456'];
numbersArray[0] = '790 euro';
numbersArray[1] = '5 600 euro';
numbersArray[2] = '78 065 euro';
numbersArray[3] = '120 910 euro';

for (int i = 0; i === numbersArray.length; i++){
    list = prompt("Enter bank account number");
    list = parseInt(list);
}

if (list === numbersArray){
    alert =
}else if(numbersArray !== numbersArray[0], numbersArray[1], numbersArray[2], numbersArray[3]{
    alert = ('bank balance unavailable')

}

const myArray = [{000256784:'790 euro'},{000986056: '5 600 euro'},{001546238: '78 065 euro'},{030987456:'120 910 euro'}];


// const for account numbers and let balance 1 = balances

// const rollDice = () => {
//     const side = document.querySelector('.side');
//     side.style.backgroundImage = "url('img/side" + random() + ".png')";
// };
// const random = () => {
//     return Math.floor (1 + Math.random() *6);
// };



const users = [['frank',123],[ 'tony',345], ['jack',789],[ 'lilly',876]];
                
const check = () => {
    const inputElm = document.querySelector('.user__input').value;
    let found = false;
    for (let i = 0; i < users.length; i++) {
        if (inputElm === users[i]) {
        found = true;
        }
    }
    if (found === true) {
        document.querySelector("#result").innerHTML = 'Looks Ok!';
    } else {
        document.querySelector("#result").innerHTML = 'Username invalid';
    }
};

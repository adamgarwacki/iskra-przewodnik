// new-char.js

// let strInput = document.getElementById('char-str');

// if(strInput) {
//     console.log(strInput.value);
// }

let allInputs = document.getElementsByClassName('form-number-input');
if (allInputs) {
    let sum = 17;
    for (const e of allInputs) {
        sum += parseInt(e.value);
    };
    
    let pointsLeftIndicator = document.getElementById('attr-points')
    if (sum < 0) {
        pointsLeftIndicator.style.backgroundColor = 'red';
    }
    pointsLeftIndicator.innerText = sum;
}
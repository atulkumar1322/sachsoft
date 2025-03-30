// count increment
let count = 0;
const target = 10;
const counterElement = document.getElementById('counter');

function increaseCounter() {
    if (count < target) {
        count++;
        counterElement.innerText = count + "+";
        setTimeout(increaseCounter, 100);
    }
}

increaseCounter();



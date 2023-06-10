const luckyNumber = randomNumber(2, 12);
const firstNumber = randomNumber(1, 6);
const secondNumber = randomNumber(1, 6);

console.log(`Seu número da sorte é: ${luckyNumber}`);
console.log(`jogando dados...`);

setTimeout(() => {
    console.log(`Você tirou ${firstNumber} no primeiro dado!`);
}, 2000);

setTimeout(() => {
    console.log(`Você tirou ${secondNumber} no segundo dado!`);
}, 4000);

setTimeout(() => {
    const result = firstNumber + secondNumber;
    if (firstNumber === secondNumber || result === luckyNumber) {
        console.log("Você ganhou!");
    } else {
        console.log("Você perdeu!");
    }
}, 5000);

function randomNumber(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

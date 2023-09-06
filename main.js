// 1.
// Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки
const button = document.querySelector(".button");
const h1 = document.querySelector("h1");
button.addEventListener("click", ()=> {h1.textContent = "Hello world!"})
// 2.
// Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const guess = document.querySelector("#guessField");
const pTextGuessResult = document.querySelector("#guessResult");
function checkGuess(callbackGuess) {
    if (Number(guess.value) === callbackGuess(100)) {
        pTextGuessResult.textContent = "Ви вгадали число!";
        return;
    }
    pTextGuessResult.textContent = "Ви не вгадали число!";
    return;
}
// 3.
// Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
const body = document.querySelector("body");
let k = 0
function func() {
    return k += 1;
}
body.addEventListener("click", ()=> {
    func()
    console.log(k);
})
// 4.
// Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.
const applyCallbackToEachElement = (arr) => {
    arr.forEach(function callback(number){
            console.log(number ** 2);
    });
}

const arr = [1, 2, 3, 4, 5]
const result = applyCallbackToEachElement(arr);



// 5.
// Розрахунок дисконтної ціни
// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.
const discountPriceCalculation = (cost, discount) => {
    console.log(cost / discount);
}
discountPriceCalculation(500, 15)
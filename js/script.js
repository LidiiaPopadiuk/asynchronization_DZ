//* 1
// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

let count = 0;
const showMessage = setInterval(() => {
  const message = "Hello world!";
  console.log(message);

  count++;

  if (count > 5) {
    clearInterval(showMessage);
    console.log("Інтервал зупинено.");
  }
}, 1000);

//* 2
// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.
const elements = document.querySelectorAll(".el");

const firstElement = elements[0];
const secondElement = elements[1];
const thirdElement = elements[2];
const randomColorHex = () => {
  return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, "0")}`;
} 
const animationEl = setInterval(() => {
  elements.forEach((element, index) => {
    console.log(index, randomColorHex());
    
    element.style.backgroundColor = randomColorHex();
    element.style.width = "150px";
    element.style.height = "150px";
  });
}, 1000);


setTimeout(() => {
  clearInterval(animationEl);
}, 10000);

//* 3
// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

const div = document.querySelector(".game");
const clickCountElement = document.getElementById("clickCount");

div.style.width = "150px";
div.style.height = "150px";
div.style.color = "black";
div.style.textAlign = "center";
div.style.lineHeight = "150px"; // Центрування тексту всередині div
div.style.borderRadius = "10px"; // Закруглення кутів для більш приємного вигляду

let clickCount = 0;
let gameDuration = 10000; // Гра триватиме 10 секунд
let gameTimer;
let moveTimer;

// Функція для переміщення елемента на випадкову позицію
function moveElement() {
    const maxX = window.innerWidth - div.offsetWidth;
    const maxY = window.innerHeight - div.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    div.style.left = `${randomX}px`;
    div.style.top = `${randomY}px`;
}

// Слухач події для кліків на елемент
div.addEventListener("click", () => {
    clickCount++;
    clickCountElement.textContent = clickCount;
});

// Таймер для руху елемента кожні 1 секунду
moveTimer = setInterval(moveElement, 1000);

// Стартуємо гру, зупиняємо її через певний час
gameTimer = setTimeout(() => {
    clearInterval(moveTimer); // Зупиняємо переміщення елемента
    alert(`Гра завершена! Ваш результат: ${clickCount} кліків.`);
}, gameDuration)


//* 4
// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

// const yourTime = prompt("Enter your time in ms", "");

// setTimeout(() => {
//   alert("Time is up!");
// }, yourTime);

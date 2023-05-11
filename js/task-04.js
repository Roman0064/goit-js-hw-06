const valueEl = document.querySelector("#value");
const counterEl = document.querySelector("#counter");
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;
decrementEl.addEventListener("click", () => {
    counterValue-- ;
    valueEl.textContent = counterValue;
});

incrementEl.addEventListener("click", () => {
    counterValue++ ;
    valueEl.textContent = counterValue;
});
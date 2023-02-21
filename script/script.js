const quoteId = document.querySelector(".quote-id");
const quote = document.getElementById("quote");
const dice =document.querySelector(".dice");
console.log(dice);

const getQuote = function () {
const fetchPromise = fetch('https://api.adviceslip.com/advice');

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const {slip: {id, advice}} = data;
    console.log(id, advice);
    quote.innerText = `"${advice}"`;
    quoteId.textContent = `#${id}`;

  })
  .catch((error) => {
    console.error(`Could not get quotes: ${error}`);
  });
}


dice.addEventListener("click", getQuote)
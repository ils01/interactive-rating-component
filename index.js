const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thank-you");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
let rating = document.getElementById("thank-you__rating");
const rates = document.querySelectorAll(".btn");
let notification = document.querySelector(".notification");

submit.addEventListener("click", () => {
  if (rating.textContent !== "") {
    notification.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
  } else {
    notification.classList.remove("hidden");
  }
});

rateAgain.addEventListener("click", () => {
  mainContainer.classList.remove("hidden");
  thankYouContainer.classList.add("hidden");
  rating.textContent = "";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.textContent = rate.innerHTML;
  });
});

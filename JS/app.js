const anotherButton = document.querySelector(".another");
const adviceText = document.querySelector("#advice-text");

const createAdvice = (data) => {
  advice = data.slip.advice;
  adviceText.innerHTML = advice;
};

const getAdvice = async () => {
  const url = "https://api.adviceslip.com/advice";
  const res = await fetch(url);
  const data = await res.json();
  createAdvice(data);
};

window.onload = () => {
  getAdvice();
};

anotherButton.addEventListener("click", () => {
  getAdvice();
});
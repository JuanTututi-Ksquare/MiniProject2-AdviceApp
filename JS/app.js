const anotherButton = document.querySelector(".another");
const adviceText = document.querySelector("#advice-text");
const shareButton= document.querySelector(".share");


const createAdvice = (data) => {
  advice = data.slip.advice;
  let formatedText = advice.replaceAll(" ","%20");
  shareButton.href="https://twitter.com/intent/tweet?text="+formatedText;
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
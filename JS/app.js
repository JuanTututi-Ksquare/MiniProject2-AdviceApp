const anotherButton = document.querySelector(".another");
const adviceText = document.querySelector("#advice-text");
const shareButton = document.querySelector(".share");
const colors = [
  "#005555",
  "#001E6C",
  "#383838",
  "​#8E3200",
  "#06113C",
  "#22577E",
  "#FFD36E",
  "#8FBDD3",
  "#084594",
  "#00B4D8",
];

const changeBackground = () => {
  let random = Math.floor(Math.random() * 10);
  document.body.style.backgroundColor = colors[random];
};

const createAdvice = (data, firstTime) => {
  let previousAdvice = adviceText.innerHTML;
  advice = data.slip.advice;
  let formatedText = advice.replaceAll(" ", "%20");
  shareButton.href = "https://twitter.com/intent/tweet?text=" + formatedText;
  adviceText.innerHTML = advice;
  if(previousAdvice !== adviceText.innerHTML && !firstTime) {
    changeBackground();
  }
};

const getAdvice = async (firstTime) => {
  const url = "https://api.adviceslip.com/advice";
  const res = await fetch(url);
  const data = await res.json();
  createAdvice(data, firstTime);
};

window.onload = () => {
  let firstTime = true;
  getAdvice(firstTime);
};

anotherButton.addEventListener("click", () => {
  let firstTime = false;
  getAdvice(firstTime);
});

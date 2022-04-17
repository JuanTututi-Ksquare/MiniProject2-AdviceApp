const anotherButton = document.querySelector(".another");
const adviceText = document.querySelector("#advice-text");
const shareButton= document.querySelector(".share");
const colors= ['#001E6C','#1A3C40','#383838','​#006778','#3A3845','#46244C','#0E185F','#361500','#084594','#00B4D8']

const changeBackground=()=>{
  let random= Math.floor(Math.random() * 10);
  document.body.style.backgroundColor= colors[random];

}

const createAdvice = (data) => {
  advice = data.slip.advice;
  let formatedText = advice.replaceAll(" ","%20");
  shareButton.href="https://twitter.com/intent/tweet?text="+formatedText;
  adviceText.innerHTML = advice;
  changeBackground();
};

const getAdvice = async () => {
  const url = "https://api.adviceslip.com/advice";
  const res = await fetch(url);
  const data = await res.json();
  
  await createAdvice(data);
  
};

window.onload = () => {
  getAdvice();
};

anotherButton.addEventListener("click", () => {
  getAdvice();
});
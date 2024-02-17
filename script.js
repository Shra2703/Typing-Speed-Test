
// sentence which have to display
let sentences = `Often called Lord Krishna, he is one of the most widely worshiped and popular Hindu deities. Krishna is the eighth avatar (or incarnation) of Vishnu. He was deified in the 5th century and since then has also been worshiped as the supreme god himself. Krishna is the Hindu god of compassion, protection, and love.
`;


let timeInterval = "";
let timerDuration = 30;

const sentenceEle = document.getElementById("sentence");
const startBtnEle = document.getElementById("start-btn");
const inputEle = document.getElementById("input");
const timerEle = document.getElementById("timer");
const resultEle = document.getElementById("result");
const speedEle = document.getElementById("speed");
const accuracyEle = document.getElementById("accuracy");
const retryEle = document.getElementById("retry-btn");


// to disble copy paste on the document
document.addEventListener("copy" , (e) => {
  e.preventDefault();
}, false)

document.addEventListener("contextmenu" , (e) => {
  e.preventDefault();
}, false)

// Start btn function
startBtnEle.addEventListener("click", startFunc);

function startFunc() {
  sentenceEle.innerHTML = sentences;
  startBtnEle.disabled = true;
  // inputEle.disabled = false;
  inputEle.focus();
  startTimer();
  // setTimeout(() => {
  //     imeIclearInterval(tnterval);
  // }, 30000)
}

// input function disbled
function inputFunction() {
  inputEle.disabled = false;
}

// function to start timer
function startTimer() {
  timeInterval = setInterval(() => {
    timerEle.textContent = `0:${timerDuration} sec`;
    timerDuration--;
    inputFunction();
    if (timerDuration <= -1) {
      endGame();
    }
  }, 1000);
}

// end game function where the logic of how speed and accuracy test
function endGame() {
  clearInterval(timeInterval);
  let typedSentence = inputEle.value.trim();
  let correctSentence = sentenceEle.textContent.trim();
  //   console.log(correctSentence);

  let typedWords = [];
  if (typedSentence != null) typedWords = typedSentence.split(" ");
  let correctWords = correctSentence.split(" ");
  let correctWordCount = 0;
  let speed = 0;
  console.log(typedWords);

  typedWords.forEach((word, index) => {
    if (word === correctWords[index]) correctWordCount++;
  });

  if (typedSentence != "") {
    speed = Math.floor((correctWordCount / 30) * 60);
  }

  let accuracy = (correctWordCount / correctWords.length) * 100;

  speedEle.textContent = speed;
  accuracyEle.textContent = accuracy.toFixed(2);
  resultEle.style.display = "block";
  inputEle.value = "";
  inputEle.disabled = true;
  retryEle.focus();
  console.log(correctWordCount);
}

// retry btn element
retryEle.addEventListener("click", () => {
  resultEle.style.display = "none";
  startBtnEle.disabled = false;
  timerDuration =  30;
  inputEle.focus();

});

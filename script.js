// sentence which have to display
// let sentences = `Often called Lord Krishna, he is one of the most widely worshiped and popular Hindu deities. Krishna is the eighth avatar (or incarnation) of Vishnu. He was deified in the 5th century and since then has also been worshiped as the supreme god himself. Krishna is the Hindu god of compassion, protection, and love.
// `;

let sentenceArr = [
  `Often called Lord Krishna, he is one of the most widely worshiped and popular Hindu deities. Krishna is the eighth avatar (or incarnation) of Vishnu. He was deified in the 5th century and since then has also been worshiped as the supreme god himself. Krishna is the Hindu god of compassion, protection, and love.
`,
  `Radha, in Hinduism, the gopi (milkmaid) who became the beloved of the god Krishna during that period of his life when he lived among the gopas (cowherds) of Vrindavan. Radha was the wife of another gopa but was the dearest of Krishna's consorts and his constant companion.
`,
`
In the Bhagavad Gita, Krisha and Arjuna are cousins tasked to fight in a contentious battle called the Mahabharata. The battle is occurring as a result of land conflict in India. Krishna has relatives on both sides of the battle while Arjuna specifically has to fight against his own friends and family in this battle.
`,
  `
Lord Krishna and Sudama were childhood friends and schoolmates at Gurukul & studied under the guidance of Guru Sandipani. After their Education got completed, they got separated. But neither Krishna nor Sudama was able to forget their divine Friendship. Both Krishna & Sudama grew up.
`,
  `As we all know she was the foster mother of lord Krishna but she is revered more than his biological mother. Yashoda will always be remembered as lord Krishna's loving mother and their relationship is much cherished and always be considered as one of the most celebrated relationship of a mother and her son of all time.`,
];


let timeInterval = "";
let timerDuration = 30;
let random;

const sentenceEle = document.getElementById("sentence");
const startBtnEle = document.getElementById("start-btn");
const inputEle = document.getElementById("input");
const timerEle = document.getElementById("timer");
const resultEle = document.getElementById("result");
const speedEle = document.getElementById("speed");
const accuracyEle = document.getElementById("accuracy");
const retryEle = document.getElementById("retry-btn");

// to disble copy paste on the document
document.addEventListener(
  "copy",
  (e) => {
    e.preventDefault();
  },
  false
);

// document.addEventListener("contextmenu" , (e) => {
//   e.preventDefault();
// }, false)

// Start btn function
startBtnEle.addEventListener("click", startFunc);

function startFunc() {
  random = Math.random() * sentenceArr.length;
  random = Math.floor(random);
console.log(Math.floor(random));

  sentenceEle.innerHTML = sentenceArr[random];
  sentenceEle.style.display = "block";
  startBtnEle.disabled = true;
  // inputEle.disabled = false;
  inputEle.focus();
  startTimer();
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
  timerDuration = 30;
  // sentenceArrCount++;
  // if(sentenceArrCount >= sentenceArr.length) sentenceArrCount = 0;
  // sentenceEle.innerHTML = sentenceArr[sentenceArrCount];
  inputEle.focus();
});

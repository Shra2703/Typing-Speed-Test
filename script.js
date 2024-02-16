let sentences = `Often called Lord Krishna, he is one of the most widely worshiped and popular Hindu deities. Krishna is the eighth avatar (or incarnation) of Vishnu. He was deified in the 5th century and since then has also been worshiped as the supreme god himself. Krishna is the Hindu god of compassion, protection, and love.
`
let timeInterval = '';
let timerDuration = 10;


const sentenceEle = document.getElementById("sentence");
const startBtnEle = document.getElementById("start-btn");
const inputEle = document.getElementById("input");
const timerEle = document.getElementById("timer");

startBtnEle.addEventListener("click", startFunc);

function startFunc(){
    sentenceEle.innerHTML = sentences;
    startBtnEle.disabled = true;
    inputEle.disabled = false;
    inputEle.focus();
    startTimer();
    // setTimeout(() => {
    //     imeIclearInterval(tnterval);
    // }, 30000)

}

function startTimer(){
    
    timeInterval = setInterval(() => {
        timerEle.textContent = `0:${timerDuration} sec`;
        timerDuration--;
        if (timerDuration <= -1) {
            endGame();
        }
    }, 1000)
}

function endGame(){
    clearInterval(timeInterval)
}
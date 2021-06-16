class MemoryGame {
    constructor(someCards) {
      this.cards = someCards;
      this.pickedCards = [];
      this.pairsGuessed = 0;
      this.shuffleCards();
    }

    shuffleCards() {
      let len = this.cards.length;
      while (len > 0) {
        len--;
        let temp = this.cards[len];
        let rdmInd = Math.floor(Math.random() * len);
        this.cards[len] = this.cards[rdmInd];
        this.cards[rdmInd] = temp;
      }
    }
    checkIfPair(card1, card2) {
      if (card1 === card2) {
        this.pairsGuessed++;
        this.isFinished();
        soundCorrect();
        return true;
      } else {
      soundIncorrect();
      return false;
      }
    }

    isFinished() {
      if (this.pairsGuessed === 12) {
        let newHtml = '<div class="div-fail"><h1>Ihuuuuu, Ganhou em!!!!</h1> <a class="btnReiniciar" href="../index.html">Menu Inicial</a> </div>';
          document.querySelector('#memory-board').innerHTML = newHtml;
      } 
      } 
  }

  function startTimer(duration, display) {
    let timer = duration , minutes , seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = 0;
        let newHtml = '<div class="div-fail"> <h1>ahhh, Perdeu!!!!</h1> <a class="btnReiniciar" href="../index.html">Menu Inicial</a> </div>';
        document.querySelector('#memory-board').innerHTML = newHtml;   
      }  
  }, 1000);
  }

function stopTimer(){ 
  clearInterval(timer);
}

  window.onload = function (){
    let twoMinutes = 4;
    display = document.querySelector('#time');
    startTimer(twoMinutes, display);
}
function soundIncorrect() {
  this.audioForIncorrect = [
    { name: "errou", file: "../audio/errou.mp3" },
    { name: "caetano", file: "../audio/burro.mp3" },
    { name: "neto", file: "../audio/oreiudo.mp3" },
  ];
  let audioInc = new Audio();
  let randomAudioForIncorrect = this.audioForIncorrect[
    Math.floor(Math.random() * this.audioForIncorrect.length)
  ];
  audioInc.src = randomAudioForIncorrect.file;
  audioInc.play();
  audioInc.volume = 0.2;
}

function soundCorrect() {
  this.audioForCorrect = [
    { name: "acertou1", file: "../audio/acertou1.mp3" },
    { name: "acertou2", file: "../audio/acertou2.mp3" },
  ];
  let audioCor = new Audio();
  let randomAudioForCorrect = this.audioForCorrect[
    Math.floor(Math.random() * this.audioForCorrect.length)
  ];
  audioCor.src = randomAudioForCorrect.file;
  audioCor.play();
  audioCor.volume = 0.2;
}

  
  
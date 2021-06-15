class MemoryGame {
    constructor(someCards) {
      this.cards = someCards;
      this.pickedCards = [];
      this.pairsGuessed = 0;
      this.pairsClicked = 0;
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
        return true;
      }
      return false;
    }

    isFinished() {
      if (this.pairsGuessed === 12) {
        let newHtml = '<div class="div-fail"><h1>Você Ganhou!!!!</h1> <a class="btnReiniciar" href="/index.html">Menu Inicial</a> </div>';
          document.querySelector('#memory-board').innerHTML = newHtml;
      } 
      } 
  }

  
  
  
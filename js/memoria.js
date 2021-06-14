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
      this.pairsClicked++;
      if (card1 === card2) {
        this.pairsGuessed++;
        this.isFinished();
        return true;
      }
      return false;
    }
    isFinished() {
      if (this.pairsGuessed === 2) {
        document.querySelector("#memory-board").innerHTML = "";
        let h1 = document.createElement("h1");
        h1.style.color = "pink";
        h1.innerHTML = "Ganhou!!!";
        document.querySelector("#memory-board").appendChild(h1);
      }
    }
  }
  
  
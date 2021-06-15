const cards = [
  { name: "dog1", img: "img1.jpg" },
  { name: "dog2", img: "img2.jpg" },
  { name: "dog3", img: "img3.jpg" },
  { name: "dog4", img: "img4.jpg" },
  { name: "dog5", img: "img5.jpg" },
  { name: "dog6", img: "img6.jpg" },
  { name: "dog7", img: "img7.jpg" },
  { name: "dog8", img: "img8.jpg" },
  { name: "dog9", img: "img9.jpeg" },
  { name: "dog10", img: "img10.jpg" },
  { name: "dog11", img: "img11.jpg" },
  { name: "dog12", img: "img12.jpeg" },
  { name: "dog1", img: "img1.jpg" },
  { name: "dog2", img: "img2.jpg" },
  { name: "dog3", img: "img3.jpg" },
  { name: "dog4", img: "img4.jpg" },
  { name: "dog5", img: "img5.jpg" },
  { name: "dog6", img: "img6.jpg" },
  { name: "dog7", img: "img7.jpg" },
  { name: "dog8", img: "img8.jpg" },
  { name: "dog9", img: "img9.jpeg" },
  { name: "dog10", img: "img10.jpg" },
  { name: "dog11", img: "img11.jpg" },
  { name: "dog12", img: "img12.jpeg" },
  ];
   
  
  const memoryGame = new MemoryGame(cards);
  console.log("new game created: ", memoryGame);
  
  document.addEventListener("DOMContentLoaded", function(event) {
    let html = "";
    memoryGame.cards.forEach(pic => {
      html += `<div class="card" data-card-name="${pic.name}">`;
      html += `<div class="back" name="${pic.img}"></div>`;
      html += `<div class="front" style="background: url(../img/${pic.img}) no-repeat"></div>`;
      html += `</div>`;
    });
    
   
    let container = document.querySelector("#memory-board").innerHTML = html;

    function toggle(element, classes) {
      classes.forEach(className => element.classList.toggle(className));
    }
  

    document.querySelectorAll(".card").forEach(card => {
      card.onclick = function() {

  
        console.log("Card clicked: ", card);
        toggle(card.children[0], ["back", "front"]);
        toggle(card.children[1], ["back", "front"]);
  
        memoryGame.pickedCards.push(card);
 
        if (memoryGame.pickedCards.length === 2) {
          const firstInPair = memoryGame.pickedCards[0];
          const secondInPair = memoryGame.pickedCards[1];
          const cardName1 = firstInPair.getAttribute("data-card-name");
          const cardName2 = secondInPair.getAttribute("data-card-name");
  
          if (memoryGame.checkIfPair(cardName1, cardName2)) {
            firstInPair.children[1].classList.add("blocked");
            secondInPair.children[1].classList.add("blocked");
            memoryGame.pickedCards = [];
          } else {
            setTimeout(() => {
              toggle(firstInPair.children[0], ["back", "front"]);
              toggle(firstInPair.children[1], ["back", "front"]);
              toggle(secondInPair.children[0], ["back", "front"]);
              toggle(secondInPair.children[1], ["back", "front"]);
            }, 1000);
            memoryGame.pickedCards = [];
          }
        }
      };
    });
  });
  const btnIniciar = document.getElementById("btnIniciar");

  function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          let newHtml = '<div class="div-fail"><h1>Você Perdeu!!!!</h1> <a class="btnReiniciar" href="/index.html">Menu Inicial</a> </div>';
          document.querySelector('#memory-board').innerHTML = newHtml;
        }
    }, 1000);
}
 
window.addEventListener("load", () =>  {
    let twoMinutes = 90;
    display = document.querySelector('#time');
    startTimer(twoMinutes, display);
});

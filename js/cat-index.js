const cards = [
  { name: "cat1", img: "cat1.jpeg" },
  { name: "cat2", img: "cat2.jpg" },
  { name: "cat3", img: "cat3.jpg" },
  { name: "cat4", img: "cat4.jpeg" },
  { name: "cat5", img: "cat5.jpg" },
  { name: "cat6", img: "cat6.jpg" },
  { name: "cat7", img: "cat7.jpg" },
  { name: "cat8", img: "cat8.jpeg" },
  { name: "cat9", img: "cat9.jpg" },
  { name: "cat10", img: "cat10.jpeg" },
  { name: "cat11", img: "cat11.jpeg" },
  { name: "cat12", img: "cat12.jpg" },
  { name: "cat1", img: "cat1.jpeg" },
  { name: "cat2", img: "cat2.jpg" },
  { name: "cat3", img: "cat3.jpg" },
  { name: "cat4", img: "cat4.jpeg" },
  { name: "cat5", img: "cat5.jpg" },
  { name: "cat6", img: "cat6.jpg" },
  { name: "cat7", img: "cat7.jpg" },
  { name: "cat8", img: "cat8.jpeg" },
  { name: "cat9", img: "cat9.jpg" },
  { name: "cat10", img: "cat10.jpeg" },
  { name: "cat11", img: "cat11.jpeg" },
  { name: "cat12", img: "cat12.jpg" },
  ];
   
  
  const memoryGame = new MemoryGame(cards);
  console.log("new game created: ", memoryGame);
  
  document.addEventListener("DOMContentLoaded", function(event) {
    let html = "";
    memoryGame.cards.forEach(pic => {
      html += `<div class="card" data-card-name="${pic.name}">`;
      html += `<div class="back" name="${pic.img}"></div>`;
      html += `<div class="front" style="background: url(/img/cat/${pic.img}) no-repeat"></div>`;
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

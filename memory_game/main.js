var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
}, {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
}, {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
}, {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}];
var cardsInPlay = [];
var gameOver = false;
var pairsRemaining = function() {
    let x = document.getElementsByTagName("img");
    for (let i = 0; i < x.length; i++) {
        if (x[i].getAttribute("src") === "images/back.png") {
            return true;
        } else {
            console.log("no pairs");
        }
    }
}

function flipCard(e) {
    if (gameOver == false) {
        let cardId = e.getAttribute("data-id");
        e.setAttribute("src", cards[cardId].cardImage);
        cardsInPlay.push(cards[cardId].rank);
        console.log("User flipped " + cards[cardId].rank);
        checkWin();
    } else {
        console.log("need to reset game");
    }
}

function createBoard() {
    let x = document.getElementsByTagName("img");
    for (let i = 0; i < x.length; i++) {
        x[i].setAttribute("src", "images/back.png");
        x[i].setAttribute("data-id", i);
        x[i].addEventListener("click", function() {
            flipCard(x[i]);
        });
    }
}

function checkWin() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
        	//added a pairs remaining function if you want to keep playing until you find all the pairs.
        	/*
            if (pairsRemaining() === true) {
                //continue routine
                cardsInPlay = [];
            } else {
                gameOver = true;
            }*/
            alert("you found a match, you win!");
            showAllCards();
        } else {
            alert("cards don't match, you lose...");
            showAllCards();
        }
    }
}

function showAllCards() {
	gameOver = true;
    let x = document.getElementsByTagName("img");
    for (let i = 0; i < x.length; i++) {
    	if(x[i].getAttribute("src") ==="images/back.png"){
    		let cardIndex = x[i].getAttribute("data-id");
    		x[i].setAttribute("src",cards[cardIndex].cardImage);
    	}
    }
}

function resetBoard() {
    cardsInPlay = [];
    let x = document.getElementsByTagName("img");
    for (let i = 0; i < x.length; i++) {
        x[i].setAttribute("src", "images/back.png");
        x[i].setAttribute("data-id", i);
    }
    gameOver = false;
}

createBoard();
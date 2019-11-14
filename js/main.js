var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

function checkForMatch(){
	this.setAttribute('src', 'cards[cardId].cardImage');
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
	} else {
  console.log("Sorry, try again.");
	}
}

function flipCard(){
	this.getAttribute(data-id);
	checkForMatch();
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suit);
	console.log("User flipped " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardsId].cardImage);
	console.log(cards[cardsId].suit);

}

function createBoard(){
	for (var i = 0; i < arrayName.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', 'cards[i]');
		cardElement.addEventListener('click', flipCard);
		cardElement.appendChild(game-board);
	}
}

createBoard();


 console.log("Up and running!");

 var cards = [
 {
 	rank: 'queen',
 	suit: 'hearts',
 	cardImage: "images/queen-of-hearts.png"
 },
 {
 	rank: 'queen',
 	suit: 'diamonds',
 	cardImage: "images/queen-of-diamonds.png"
 },
 {
 	rank: 'king',
 	suit: 'hearts',
 	cardImage: "images/king-of-hearts.png"
 },
 {
 	rank: 'king',
 	suit: 'diamonds',
 	cardImage: "images/king-of-diamonds.png"
 }
 ];
 var cardsInPlay = [];

//Checks for the cards matching IF there are 2 in play
var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
	  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
      alert("You found a match!");
  } else {
      console.log("Sorry, try again.");
      alert("Sorry, try again.");
  }
};
};


var flipCard = function (cardID){

 console.log('User flipped ' + cards[cardID].rank);
 console.log(cards[cardID].cardImage);

// This line pushes the card ID to the cards in play array
 cardsInPlay.push(cards[cardID].rank);
 checkForMatch();
};

// These perameters simulate the cards being flipped once and again
flipCard(0);
flipCard(1);
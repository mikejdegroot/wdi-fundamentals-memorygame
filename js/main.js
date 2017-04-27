 console.log("Up and running!");

 var cards = ['queen','queen','king','king'];
 var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
	  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
};
};


var flipCard = function (cardID){

 console.log('User flipped ' + cards[cardID])

// This line pushes the card ID to the cards in play array
 cardsInPlay.push(cards[cardID]);
 checkForMatch();
};

// These perameters simulate the cards being flipped once and again
flipCard(0);
flipCard(1);
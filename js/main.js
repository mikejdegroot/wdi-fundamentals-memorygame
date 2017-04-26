 console.log("Up and running!");

 var cards = ['queen','queen','king','king'];
 var cardsInPlay = [];
 var cardOne = cards[0];
 var cardTwo = cards[1];
 cardsInPlay.push('cardOne');
 cardsInPlay.push('cardTwo');

 console.log('User flipped queen');
 console.log('user flipped king');

 if (cardsInPlay.length === 2) {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
alert('match!')
 } else {
 	alert('No match!')
 }};
'use strict';

const name = prompt('What is your name?');
console.log('their name; ' + name);
alert('Hello ' + name + '!');

const favBand = prompt('What is your favorite band?');
console.log('their favorite band; ' + favBand);
alert('Nice choice, ' + name + '. I like ' + favBand + " too.");

const instrument = prompt('If you were in this band what instrument would you play?');
console.log('their instrument; ' + instrument);  
alert('Well, ' + name + ' it looks like you play the ' + instrument + ' for ' + favBand + '!')

const gigLocation = prompt('Now that you are part of the band, where would you like to play your first gig?');
console.log('gig location; ' + gigLocation);
alert('Alright, ' + name + '! Pack your bags and your ' + instrument + '. You are off to ' + gigLocation + ' to play with ' + favBand + '!');
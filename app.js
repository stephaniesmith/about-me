'use strict';

// What is your name?
const name = prompt('What is your name?');
console.log('their name; ' + name);
alert('Hello ' + name + '!');

// What is your favorite band?
const favBand = prompt('What is your favorite band?');
console.log('their favorite band; ' + favBand);
alert('Nice choice, ' + name + '. I like ' + favBand + ' too.');

//If you were in this band what instrument would you play?
const instrument = prompt('If you were in this band what instrument would you play?');
console.log('their instrument; ' + instrument);
alert('Well, ' + name + ' it looks like you play the ' + instrument + ' for ' + favBand + '!');

//Now that you are part of the band, where would you like to play your first gig?
const gigLocation = prompt('Now that you are part of the band, where would you like to play your first gig?');
console.log('gig location; ' + gigLocation);
alert('Alright, ' + name + '! Pack your bags and your ' + instrument + '. You are off to ' + gigLocation + ' to play with ' + favBand + '!');

//Have you packed your bags for the show?
const bagsPacked = prompt('Have you packed your bags for the show?').toLowerCase();
console.log('bags packed: ' + bagsPacked);

if (bagsPacked === 'yes' || bagsPacked.startsWith('y')){
    alert('Alright, ' + name + '! Grab your ' + instrument + ' ' + gigLocation + ' awaits!');
} else if (bagsPacked === 'no' || bagsPacked.startsWith('n')){
    alert('Alright, ' + name + '. Get it together. You\'re playing ' + instrument + ' for ' + favBand.toUpperCase() + '!');
} else {
    alert('Look, ' + name + '. I\'m going to need a yes or no from you.');
}

//Are you riding on the tour bus?
const tourBus = prompt('Are you riding on the tour bus?').toLowerCase();
console.log('riding tour bus: ' + tourBus);

if (tourBus === 'yes' || tourBus.startsWith('y')){
    alert('Awesome! You\'re going to get so much bonding time with ' + favBand + '.');
} else if (tourBus === 'no' || tourBus.startsWith('n')){
    alert(favBand + ' got you a plane ticket to ' + gigLocation + '! I bet you\'re flying first class.');
} else {
    alert('Do you know how you\'re getting to ' + gigLocation + '?');
}

//Have you tuned your instrument?
const tuned = prompt('Have you tuned your instrument?').toLowerCase();
console.log('insterment tuned: ' + tuned);

if (tuned === 'yes' || tuned.startsWith('y')){
    alert('Sounding good, ' + name + '. Get your ' + instrument + ' on that stage!');
} else if (tuned === 'no' || tuned.startsWith('n')){
    alert('So, your ' + instrument + ' sound like a dying cat. ' + favBand + ' will be disappointed.');
} else {
    alert('Can you not tune your ' + gigLocation + '?');
}

// Have you done a sound check?
const soundCheck = prompt('Have you done a sound check?').toLowerCase();
console.log('done sound check: ' + soundCheck);

if (soundCheck === 'yes' || soundCheck.startsWith('y')){
    alert(name + ', get stoked! Your set with ' + favBand + ' is going to be awesome!');
} else if (soundCheck === 'no' || soundCheck.startsWith('n')){
    alert('Get to the stage! Got to make sure your ' + instrument + ' sounds beautiful tonight!');
} else {
    alert('If you\'re not sure if you\'ve done a sound check then ask a roadie.');
}

//Did you get an encore?
const encore = prompt('Did you get an encore?').toLowerCase();
console.log('encore: ' + encore);

if (encore === 'yes' || encore.startsWith('y')){
    alert('Congrats, ' + name + '! You\'re a rock star now.');
} else if (encore === 'no' || encore.startsWith('n')){
    alert('Sorry, ' + gigLocation + ' was a boring audience.');
} else {
    alert(name + ', it\'s either yes or no. You either got an encore or you didn\'t.');
}

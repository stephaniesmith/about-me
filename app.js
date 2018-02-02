// 'use strict';

// // What is your name?


function getName() {
    const name = prompt('What is your name?');
    console.log('their name; ' + name);
    alert('Hello ' + name + '! I\'m Stephanie.');
    return name;
}

const something = getName();
console.log(something);

// What is your favorite band?
function coolBand() {
    const favBand = prompt('What is your favorite band?');
    console.log('their favorite band; ' + favBand);
    alert('Nice choice, ' + something + '. I like ' + favBand + ' too. Matt & Kim is my favorite band. I bet you would be into them!');
    return favBand;
}

coolBand();
// //If you were in this band what instrument would you play?
// function yourInstrument() {
//     const instrument = prompt('If you were in this band what instrument would you play?');
//     console.log('their instrument; ' + instrument);
//     alert('Well, ' + name + ' it looks like you play the ' + instrument + ' for ' + favBand + ' and I\'ll be on the tambourine!');
//     return instrument;
// }
// yourInstrument();

// //Now that you are part of the band, where would you like to play your first gig?
// function gig() {
//     const gigLocation = prompt('Now that you are part of the band, where would you like to play your first gig?');
//     console.log('gig location; ' + gigLocation);
//     alert('Alright, ' + name + '! Pack your bags and your ' + instrument + '. We are off to ' + gigLocation + ' to play with ' + favBand + '!');
//     return gig;
// }
// gig();
// // //Have you packed your bags for the show?
// function bags() {
//     const bagsPacked = prompt('Have you packed your bags for the show?').toLowerCase();
//     console.log('bags packed: ' + bagsPacked);
//     if (bagsPacked === 'yes' || bagsPacked.startsWith('y')){
//         alert('Alright, ' + name + '! I\'m all packed up too so grab your ' + instrument + ' ' + gigLocation + ' awaits!');
//     } else if (bagsPacked === 'no' || bagsPacked.startsWith('n')){
//         alert('Alright, ' + name + '. Get it together. We\'re playing ' + instrument + ' for ' + favBand.toUpperCase() + '!     I\'m coming over to help you pack');
//     } else {
//         alert('Look, ' + name + '. I\'m going to need a yes or no from you.');
//     }
//     return bags; 
// }
// bags();

// //Are you riding on the tour bus?

// function bus() {
//     const tourBus = prompt('Are you riding on the tour bus?').toLowerCase();
//     console.log('riding tour bus: ' + tourBus);

//     if (tourBus === 'yes' || tourBus.startsWith('y')){
//         alert('Awesome! We\'re going to get so much bonding time with ' + favBand + '.');
//     } else if (tourBus === 'no' || tourBus.startsWith('n')){
//         alert(favBand + ' got us plane tickets to ' + gigLocation + '. We\'re flying first class!');
//     } else {
//         alert('Do you know how you\'re getting to ' + gigLocation + '? I\'m riding on the tour bus.');
//     }
//     return tourBus;
// }

// bus();


// // Have you done a sound check?
// function sound() {
//     const soundCheck = prompt('Have you done a sound check?').toLowerCase();
//     console.log('done sound check: ' + soundCheck);

//     if (soundCheck === 'yes' || soundCheck.startsWith('y')){
//         alert(name + ', get stoked! Our set with ' + favBand + ' is going to be awesome! I\'m ready for my tambourine solo!');
//     } else if (soundCheck === 'no' || soundCheck.startsWith('n')){
//         alert('Get to the stage! Got to make sure your ' + instrument + ' sounds beautiful tonight!');
//     } else {
//         alert('If you\'re not sure if you\'ve done a sound check then ask a roadie for help.');
//     }
// }

// sound();
// //Did we get an encore?
// function ovation() {
//     const encore = prompt('I had to leave the show early due to a tambourine related injury. Did we get an encore?').toLowerCase();
//     console.log('encore: ' + encore);

//     if (encore === 'yes' || encore.startsWith('y')){
//         alert('Congrats, ' + name + '! You\'re a rock star now.');
//     } else if (encore === 'no' || encore.startsWith('n')){
//         alert('Sorry, ' + gigLocation + ' was a boring audience and they ruined my tambourine!');
//     } else {
//         alert(name + ', it\'s either yes or no. We either got an encore or we didn\'t.');
//     }
// }

// ovation();
// Right answers

// let rightAsnwers = 0;

// //How many Matt & Kim shows have I been to?
// function shows() {
//     for (let i = 0; i < 4; i++) {
//         const numShows = parseInt(prompt('Earlier I told you Matt & Kim was my favorite band. How many times do you think I\'ve seen them live?'));
//         console.log('number of shows: ' + numShows);

//         if (numShows > 4) {
//             alert('I wish I\'ve been to that many shows!');
//         } else if (numShows < 4){
//             alert('I\'ve been to more than that!');
//         } else if (numShows === 4){
//             alert('That\'s right! ' + 'Tasha' +  ', we should see a show together sometime!');
//             console.log(rightAsnwers++);
//             break;
//         }
//     }
//     return rightAsnwers;
// }

// shows();
// // Name a state where I've seen Matt & Kim play.

// function whichState() {
//     for (let j = 0; j < 6; j++) {
//         const states = ['washington', 'california', 'utah', 'oregon'];
//         const stateGuess = prompt('Each of the 4 times I saw Matt & Kim live it was in a different state. Can you guess one of the States?').toLowerCase();
//         console.log('state guess: ' + stateGuess);

//         if (stateGuess === states[0]) {
//             alert('That\'s right! The other states were ' + states.splice(1) + '.');
//             console.log(rightAsnwers++);
//             break;
//         } else if (stateGuess === states[1]){
//             const removed = states.splice(1, 1);
//             console.log(removed);
//             alert('That\'s right! The other states were ' + states + '.');
//             console.log(rightAsnwers++);
//             break;
//         } else if (stateGuess === states[2]){
//             const removed = states.splice(2, 1);
//             console.log(removed);
//             alert('That\'s right! The other states were ' + states + '.');
//             console.log(rightAsnwers++);
//             break;
//         } else if (stateGuess === states[3]){
//             const removed = states.splice(3, 1);
//             console.log(removed);
//             alert('That\'s right! The other states were ' + states + '.');
//             console.log(rightAsnwers++);
//             break;
//         } else if (states.includes[stateGuess] = true){
//             alert('Haven\'t seen them in ' + stateGuess + ' yet. Maybe one day.');
//         }
//     }
//     return rightAsnwers;
// }
// alert('Well, ' + name + ', you got ' + rightAsnwers + ' out of 2 questions correct. More importantly, you learned to play the ' + instrument + ' went to ' + gigLocation + ' and had a show with ' + favBand + '!');
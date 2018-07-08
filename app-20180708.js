/*proj1-portfolio is:
D:\GWG-FEND\Proj1-Portfolio*/

 //watched Mike Wales' video https://www.youtube.com/watch?v=_rUH-sEs68Y 23 May 2018

 /*Change to const and/or let throughout code based on conversation with mentor, Vince const cards and deck as I don't want those to change but let allCArds and openCards as need to be able to change within functions*/
/*UDACITY: store cards in array*/
const cards = ['fa-diamond', 'fa-diamond', 'fa-paper-plane-o', 'fa-paper-plane-o','fa-anchor', 'fa-anchor','fa-bolt', 'fa-bolt','fa-cube', 'fa-cube','fa-leaf', 'fa-leaf','fa-bicycle', 'fa-bicycle','fa-bomb', 'fa-bomb'];


/*UDACITY: Create a list that holds all of your cards*/
/*UDACITY:add each card's HTML to  page*/
function generateCard(card) {
    return '<li class="card"><i class="fa ${card}"></i></li>';
}

/*,
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
/*Matthew Cranford's post https://matthewcranford.com/memory-game-walkthrough-part-4-shuffling-decks/ June 12, 2018*/
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 //watched Mike Wales' video https://www.youtube.com/watch?v=_rUH-sEs68Y 23May 2018
 /*this section didn't work in browser 'uncaught reference error since cardHTML is not defined but I'll get going forward*/
 function initGame() {
     const deck = document.querySelector('.deck');
     /*calls HTML from function generateCard above*/
     /*map translates array into something else-here it's turned into HTML string*/
     /*Another Mike Wales' video to shuffle cards*/
     let cardHTML = shuffle(cards).map(function(card) {
         return generateCard(card);
     });
     /*turns map above into chunk to pop into game card that is currently missing the grid*/
     deck.innerHTML = cardHTML.join('');
 }

 //watched Mike Wales' video https://www.youtube.com/watch?v=_rUH-sEs68Y 23May 2018
let allCards = document.querySelectorAll('.card');
let openCards = [];



/*flips cards over to see icon*/
allCards.forEach(function(card) {
    card.addEventListener('click', function(evt) {
        /*Mike Wales video*/
        /*limit number of cards flipped and timing*/
        /*pushes current card into array*/
        openCards.push(card);
        /*flips the pushed card over*/
        card.classList.add('open', 'show');
            /*limits how many cards can be flipped*/
            if (openCards.length == 2) {
                /*Worked with Iip Promona to set up matching and stays open and showing when a match*/
                if (openCards[0].children[0].className !== openCards[1].children[0].className) {
                    setTimeout(function () {
                        /*flips card back over after set amount of time*/
                        openCards.forEach(function(card) {
                            card.classList.remove('open', 'show');
                        });
                    /*empty array after running the flipped and back cards*/
                    openCards = [];
                /*times how long the cards non-matches are seen before flipped back over*/
                }, 1000);
            /*This is a match because line 82 is false*/
            } else {
                openCards = [];
            }
            }
        }
    );
});

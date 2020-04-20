document.addEventListener('DOMContentLoaded', () => {

    //card options - 2 cards each
    const cardArray = [
        {
            name: 'fries', 
            img: 'images/fries.png'
        },
        {
            name: 'fries', 
            img: 'images/fries.png'
        },
        {
            name: 'hotdog', 
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog', 
            img: 'images/hotdog.png'
        },
        {
            name: 'cheesburger', 
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheesburger', 
            img: 'images/cheeseburger.png'
        },
        {
            name: 'ice-cream', 
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream', 
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake', 
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake', 
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza', 
            img: 'images/pizza.png'
        },
        {
            name: 'pizza', 
            img: 'images/pizza.png'
        }
    ];

    // refresh game with new card positions by randomising card array
    cardArray.sort(() => 0.5 - Math.random());

    // use query selector to pick out the element with the class name of grid from our html and define it as 'grid' for our JS
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // create game board
    function createBoard() {
        // use for-loop to loop over card array
        // for each card create an image element
        // call this element card
        // for each card set an attribute linking it to the image with relative path image
        // give each one a data id and loop over each one that gives them an id that goes from 0 to 11 as we have 12 cards in total in our card array
        // then add event listener to listen out if the cards have been clicked on and invoke a "flipCard()" function
        // all these cards (image elements) with different ids is put into the div class grid using "appendChild()"
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check for matches
    function checkForMatch() {
        // pick out all the images that we created in the first function and called them cards
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        // check if the two cards has the same name i.e. is a match
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert and "remove" cards from board
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen); // pushing the whole array here (one element) - essentially makes it one point
        } else {
            // flip cards back over to be played again
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again');
        }
        // no matter what happens, still clear the cardsChosen and cardsChosenId array to be ready to flipped again
        cardsChosen = []
        cardsChosenId = []
        // convert cards won into a score and display it to the user - each card one is a point
        resultDisplay.textContent = cardsWon.length
        // if cardsWon length is equal to half of total no. of cards, we know we have collected all the possible cards
        if (cardsWon.length === cardArray.length/2) {
             resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    // flip your card
    function flipCard() {
        // set variable cardId and get the card id attribute we created in createBoard() function above
        // using push, we will push card from card array based on card id
        // once we have located this card we will get its name
        // because flipCard() is already in a function, we technically already have a card picked
        // we can setAttribute to the card that allows us to add an image to that square based on the card id it holds
        // we only want to have two cards in cardsChosen array, so if it reaches 2, invoke the check matches function
        // setTimeout() gives us buffer time so the whole thing doesn't happen too quickly - check for match exactly after 500 milliseconds
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    // create the board
    createBoard();

})
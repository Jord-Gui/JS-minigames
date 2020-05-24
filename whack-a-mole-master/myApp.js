// querySelectorAll() gets all elements in the document with class="example" and returns it as a static NodeList object
// NodeList object represents a collection of nodes
// the nodes can be accessed by index numbers, starting at 0

// select all divs with class name square and call them square for JS file
// the dot (.) is use for class names
const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
// find id of time left (shown using # as opposed to . for class)
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    // first remove a potential mole from all squares in the grid by removing the 'mole' class from a div
    square.forEach(className => {
        className.classList.remove('mole');
    })
    // get a random position in the grid
    let randomPosition = square[Math.floor(Math.random() * 9)];
    // add the class of mole to this position
    randomPosition.classList.add('mole');
    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id;
}

// add an event to each square to see if a mole has been hit
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
        result = result + 1;
        score.textContent = result;
        }
    })
})


function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 500);
}

moveMole()


function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0 ) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is' + result)
    }
}

let timerId = setInterval(countDown, 1000)

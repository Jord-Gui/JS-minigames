// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// exercise 1
const redP = document.createElement('p');
redP.style.color = 'red';
redP.textContent = "Hey I'm red!";
container.appendChild(redP);

// exercise 2
const blueHeading = document.createElement('h3');
blueHeading.style.color = 'blue';
blueHeading.textContent = "I'm a blue h3!";
container.insertBefore(blueHeading, content);

// exercise 3
const anotherDiv = document.createElement('div');
anotherDiv.style.backgroundColor = 'pink';
anotherDiv.style.borderColor = 'black';
container.appendChild(anotherDiv);

const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div";
anotherDiv.appendChild(heading1);

const anotherP = document.createElement('p');
anotherP.textContent = "ME TOO!";
anotherDiv.appendChild(anotherP);

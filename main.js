let titleDiv = document.getElementById('title');
titleDiv.style.backgroundColor = "Orange";


let blueDiv = document.getElementById('blue');
let redDiv = document.getElementById('red');
let greenDiv = document.getElementById('green');


const squares = document.querySelectorAll('.colorBtn');
console.log(squares);

//forEach loop combining onclick , gets values and prints on squares

const timesClicked = { 'blue': 0, 'red':0, 'green':0
}
squares.forEach(square =>{
    square.onclick = () => {
timesClicked[square.value] += 1
square.innerText = timesClicked[square.value];
         
    }
});

// Clearing the game
//first we make values of all onclick instances to 0 to return default 

const clearScores =() => {
    timesClicked.blue = 0
    timesClicked.red = 0
    timesClicked.green = 0
    squares.forEach(square =>{
        square.innerText = 0 
    })
}
//get the id of the clear game button
const clearScoresBtn = document.getElementById('clear game')
//what it does when clicked. as a function it clears scores as was specified earlier
clearScoresBtn.onclick = () => clearScores()

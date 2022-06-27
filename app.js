const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
let userChoice
/// all the possible choices
const possibleChoices = document.querySelectorAll('button')

// grab all these button
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',
    (event) => { 
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    }
)
)

function generateComputerChoice() { 
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1  // you could also use * 3
 
    if (randomNumber === 1) { 
        computerChoice = 'Rock'
    }
     
    if (randomNumber === 2) { 
        computerChoice = 'Paper'
    }
     
    if (randomNumber === 3) { 
        computerChoice = 'Scissors'
    }
computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice === userChoice)
        result = 'It is a draw!'

    if (computerChoice === 'Rock' && userChoice === "Paper") {
        result = 'You win!'
    }
    if (computerChoice === 'Rock' && userChoice === "Scissors") {
        result = 'You lost!'
    }
    if (computerChoice === 'Paper' && userChoice === "Rock") {
        result = 'You lost!'
    }
    if (computerChoice === 'Paper' && userChoice === "Scissors") {
        result = 'You win!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Paper") {
        result = 'You lost!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Rock") {
        result = 'You win!'
    }
    resultDisplay.innerHTML = result
}
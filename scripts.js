const result = document.querySelector('.result');
const myScore = document.querySelector('.my-score span');
const machineScore = document.querySelector('.machine-score span');

let myScoreNumber = 0;
let machineScoreNumber = 0;

// ENUMS
const GAME_OPTIONS = {
    ROCK: 'pedra',	
    PAPER: 'papel',
    SCISSORS: 'tesoura'
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Empate!';
    } else if (
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) || 
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK)
    ) {
        myScoreNumber++;
        myScore.innerHTML = myScoreNumber;
        result.innerHTML = `Parabéns, você venceu!<br>
        Você jogou ${human} e Alexa jogou ${machine}.`;
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;	
        result.innerHTML = `Você Perdeu!<br>
        Você jogou ${human} e Alexa jogou ${machine}.`;
    }
}
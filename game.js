// const { options, GameOptions } = require('./types.js');

class Game
{
    constructor(numRounds)
    {
        this.numRounds = numRounds;
        this.playedRounds = 0;
    }

    play(playerOne, playerTwo)
    {
        console.log("Playing a game of Roshambo against the computer!");
        console.log(`${playerOne.name} played ${playerOne.getMove().name}`);
        console.log(`${playerTwo.name} played ${playerTwo.getMove().name}`);
    }

    _checkWinner(playerOneMove, playerTwoMove)
    {
        
    }
}

module.exports = 
{
    Game: Game
}
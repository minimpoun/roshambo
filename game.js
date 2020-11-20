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

        console.log(`And the winner is: ${this._checkWinner(playerOne, playerTwo)}`);
    }

    _checkWinner(playerOne, playerTwo)
    {
        if (playerOne.getMove().name === playerTwo.getMove().name) return "No one";
        return playerOne.getMove().beats[0] === playerTwo.getMove().name ? playerOne.name : playerTwo.name;
    }
}

module.exports = 
{
    Game: Game
}
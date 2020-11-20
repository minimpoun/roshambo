const { MoveManager } = require('./types.js');

class Controller
{
    constructor(name)
    {
        this.name = name;
    }

    getMove()
    {
        return undefined;
    }
}

class PlayerController extends Controller
{
    constructor(name, move)
    {
        super(name);
        this.move = move;
    }

    getMove()
    {
        return MoveManager.getMoveFromInput(this.move);
    }
}

class AIController extends Controller
{
    constructor()
    {
        super('Computer');
        this.move = MoveManager.getRandomMove()
    }

    getMove()
    {
        return this.move;
    }
}

module.exports = 
{
    Controller: Controller,
    PlayerController: PlayerController,
    AIController: AIController
}
const { MoveManager } = require('./types.js');

class Controller
{
    constructor(name)
    {
        this.name = name;
    }

    get getMove()
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

    get getMove()
    {
        return MoveManager.getMoveFromInput(this.move.toLowerCase());
    }
}

class AIController extends Controller
{
    constructor()
    {
        super('Computer');
    }

    get getMove()
    {
        return Types.MoveManager.getRandomMove();
    }
}

module.exports = 
{
    Controller: Controller,
    PlayerController: PlayerController,
    AIController: AIController
}
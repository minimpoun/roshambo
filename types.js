class MoveSet
{
    constructor(beats, name)
    {
        this.validMoves = [0, 1, 2, 'rock', 'paper', 'scissors'];
        this.beats = beats;
        this.name = name;
    }

    get getBeats()
    {
        return beats;
    }

    set setBeats(val)
    {
        this.beats = val;
    }
}

class RockMoveSet extends MoveSet
{
    constructor()
    {
        super(['scissors'], 'rock');
    }
}

class PaperMoveSet extends MoveSet
{
    constructor()
    {
        super(['rock'], 'paper');
    }
}

class ScissorsMoveSet extends MoveSet
{
    constructor()
    {
        super(['paper'], 'scissors');
    }
}

class MoveManager
{
    static getMoveFromInput(input)
    {
        switch(input)
        {
            case 0: return new RockMoveSet();
            case 1: return new PaperMoveSet();
            case 2: return new ScissorsMoveSet();
            case 'rock': return new RockMoveSet();
            case 'paper': return new PaperMoveSet();
            case 'scissors': return new ScissorsMoveSet();

            default:
            {
                throw new Error("Invalid Input");
            }
        }
    }

    static getRandomMove()
    {
        const moves = [0, 1, 2];
        return MoveManager.getMoveFromInput(Math.floor(Math.random() * Math.floor(3)));
    }
}

module.exports =
{
    MoveSet: MoveSet,
    RockMoveSet: RockMoveSet,
    PaperMoveSet: PaperMoveSet,
    ScissorsMoveSet: ScissorsMoveSet,
    MoveManager: MoveManager
}
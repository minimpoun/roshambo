const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const { PlayerController } = require('./controller.js');
const { AIController } = require('./controller.js');
const { Game } = require('./game.js');

const input = argv.input;
const name = argv.name;

let player = new PlayerController(name, input);
let computer = new AIController();
let game = new Game(1);

game.play(player, computer);

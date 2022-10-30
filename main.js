import './libs/jquery.js';
import keyHandler from './handlers/keyhandler.js';

import Game from './game/game.js';
import Player from './game/player.js';
import Coords from './game/coords.js';

$(() => {
	const game = new Game();

	const player = new Player(
		game.Map,
		new Coords(0, 550),
		"#07B4F5"
	);

	keyHandler.execute(player);
});
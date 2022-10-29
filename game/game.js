import '../libs/jquery.js'

class Game
{
	/** @type {HTMLCanvasElement} */
	Map;

	constructor()
	{
		const canvas = $("#game")[0];
		this.Map = canvas;
	}
}

export default Game;
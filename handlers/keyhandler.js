import Player from '../game/player.js';
import '../libs/jquery.js';

const keyHandler = {
	delay: 1,
	/** @param {Player} player */
	execute(player) {
		$(document).on('keydown', async (key) => {
			switch (key.code) {
				case "ArrowUp":
					player.move();
				break;

				case "ArrowDown":

				break;

				case "ArrowLeft":

				break;

				case "ArrowRight":

				break;
			}
		});
	}
}

export default keyHandler;
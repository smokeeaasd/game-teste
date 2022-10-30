import Player from '../game/player.js';
import '../libs/jquery.js';

const keyHandler = {
	delay: 1,
	/** @param {Player} player */
	interval: {
		up: null,
		down: null,
		left: null,
		right: null
	},
	walking: {
		up: false,
		down: false,
		left: false,
		right: false
	},

	execute(player) {
		$(document).on('keydown', async (key) => {
			switch (key.code) {
				case "ArrowUp":
					if (this.walking.up || this.walking.down) return;

					this.walking.up = true

					this.interval.up = setInterval(() => {
						player.move(0, -2);
					}, 10);
				break;

				case "ArrowDown":
					if (this.walking.down || this.walking.up) return;

					this.walking.down = true

					this.interval.down = setInterval(() => {
						player.move(0, 2);
					}, 10);
				break;

				case "ArrowLeft":
					if (this.walking.left || this.walking.right) return;

					this.walking.left = true

					this.interval.left = setInterval(() => {
						player.move(-2, 0);
					}, 10);
				break;

				case "ArrowRight":
					if (this.walking.right || this.walking.left) return;

					this.walking.right = true

					this.interval.right = setInterval(() => {
						player.move(2, 0);
					}, 10);
				break;

				case "Space":

				break;
			}
		});

		$(document).on('keyup', async (key) => {
			switch (key.code) {
				case "ArrowUp":
					this.walking.up = false
					clearInterval(this.interval.up);

				case "ArrowDown":
					this.walking.down = false
					clearInterval(this.interval.down);
				break;

				case "ArrowLeft":
					this.walking.left = false
					clearInterval(this.interval.left);
				break;

				case "ArrowRight":
					this.walking.right = false
					clearInterval(this.interval.right);
				break;
			}
		});
	}
}

export default keyHandler;
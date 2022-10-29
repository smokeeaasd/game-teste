import "../libs/jquery.js";
import Coords from "./coords.js";

class Player {
	/** @type {HTMLCanvasElement} */
	map;

	/** @type {Coords} */
	position;

	/** @type {CanvasRenderingContext2D} */
	entity;

	

	drawPlayer(x, y) {
		this.entity.beginPath();

		this.entity.fillStyle = "#512EB3";

		this.entity.fillRect(x, y, 50, 50);

		requestAnimationFrame(this.drawPlayer);
	}

	/**
	 * 
	 * @param {HTMLCanvasElement} map 
	 * @param {Coords} position 
	 */
	constructor(map, position) {
		this.entity = map.getContext("2d");

		this.drawPlayer(position.x, position.y);

		this.position = position;
	}

	get #positions() {
		return {
			inLeftEdge: this.position.x == 0,
			inRightEdge: this.position.x == 950,
			inTopEdge: this.position.y == 0,
			inBottomEdge: this.position.y == 550
		}
	}

	/**
	 * 
	 * @param {Number} x
	 * @param {Number} y 
	 */
	move(x = 0, y = 0) {
		if (x > 0 && this.#positions.inRightEdge)
			return;
		if (x < 0 && this.#positions.inLeftEdge)
			return;
		if (y < 0 && this.#positions.inTopEdge)
			return;
		if (y > 0 && this.#positions.inBottomEdge)
			return;

		this.entity.clearRect(this.position.x, this.position.y, 50, 50);

		this.position.x += x;
		this.position.y += y;

		this.drawPlayer(this.position.x, this.position.y);

		console.clear();
		console.log(this.#positions);
	}
}

export default Player;
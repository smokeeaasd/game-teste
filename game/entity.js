import "../libs/jquery.js";
import Coords from "./coords.js";

class Entity {
	/** @type {Coords} */
	position;

	/** @type {CanvasRenderingContext2D} */
	entity;

	/** @type {String} */
	color;

	drawEntity(x, y) {
		this.entity.beginPath();

		this.entity.fillStyle = this.color;

		this.entity.fillRect(x, y, 50, 50);
	}

	/**
	 * @param {HTMLCanvasElement} map 
	 * @param {Coords} position
	 * @param {String} color
	 */
	constructor(map, position, color) {
		this.color = color;

		this.entity = map.getContext("2d");

		this.drawEntity(position.x, position.y);

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
	move(x, y) {
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

		this.drawEntity(this.position.x, this.position.y);
	}
}

export default Entity;
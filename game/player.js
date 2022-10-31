import Entity from "./entity.js";
import Size from "./size.js";

class Player extends Entity {
	/**
	 * @param {HTMLCanvasElement} map 
	 * @param {Coords} position
	 * @param {String} color
	 * @param {Size} size
	 */
	constructor(map, position, color, size) {
		console.log(size);
		super(map, position, color, size);
	}
}

export default Player;
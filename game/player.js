import Entity from "./entity.js";

class Player extends Entity {

	/**
	 * @param {HTMLCanvasElement} map 
	 * @param {Coords} position
	 * @param {String} color
	 */
	constructor(map, position, color) {
		super(map, position, color);
	}
}

export default Player;
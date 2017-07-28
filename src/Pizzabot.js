class Pizzabot {
	constructor() {
		this.maxX = 0;
		this.maxY = 0;
		this.coordinates = [];
		this.currentX = 0;
		this.currentY = 0;
		this.directions = '';
	}

	startDelivery (instructions) {
		if (typeof instructions !== 'string') {
			return new Error('Instructions must be a string');
		}

		let props = _parseInstructions(instructions);

		this.currentX = 0;
		this.currentY = 0;
		this.maxX = props.maxX;
		this.maxY = props.maxY;
		this.coordinates = props.coordinates;
		this.directions = '';

		for (let points of this.coordinates) {
			let nextX = points[0];
			let nextY = points[1];

			if (nextX > this.currentX) {
				_moveEast(this.currentX, nextX);
				this.currentX = nextX;
			} else if (nextX < this.currentX) {
				_moveWest(this.currentX, nextX);
				this.currentX = nextX;
			}

			if (nextY > this.currentY) {
				_moveNorth(this.currentY, nextY)
				this.currentY = nextY;
			} else if (nextY < this.currentY) {
				_moveSouth(this.currentY, nextY)
				this.currentY = nextY;
			}

			if (this.currentX === nextX && this.currentY === nextY) {
				_directions += 'D';
			}
		}

		this.directions = _directions;

		return this.directions;
	}
}

let _directions = '';

function _parseInstructions(instructions) {
	instructions = instructions.split(' ');

	let grid = instructions[0];

	let parsed = {
		maxX: grid[0],
		maxY: grid[2],
		coordinates: []
	}

	for (let i = 1; i < instructions.length; i += 2) {
		let x = parseInt(instructions[i].replace(/\D+/g, ''));
		let y = parseInt(instructions[i + 1].replace(/\D+/g, ''));

		if (x > parsed.maxX || y > parsed.maxY) {
			return new Error(`Coordinate cannnot be greater than grid size`);
		}

		parsed.coordinates.push([x, y]);
	}

	return parsed;
}

function _moveNorth (start, stop) {
	for (let i = start; i < stop; i++) {
		_directions += 'N';
	}
}

function _moveSouth (start, stop) {
	for (let i = start; i > stop; i--) {
		_directions += 'S';
	}
}

function _moveEast (start, stop) {
	for (let i = start; i < stop; i++) {
		_directions += 'E';
	}
}

function _moveWest (start, stop) {
	for (let i = start; i > stop; i--) {
		_directions += 'W';
	}
}

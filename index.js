(function () {
	let examplebot = new examplebot();

	let commands = ["5x5 (1, 3) (4, 4)", "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"];

	alert(`Directions for ${commands[0]}: ${examplebot.startDelivery(commands[0])}`);
	alert(`Directions for ${commands[1]}: ${examplebot.startDelivery(commands[1])}`);
}());

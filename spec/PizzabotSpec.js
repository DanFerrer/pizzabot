describe('Pizzabot', function () {
	var pizzabot;

	beforeEach(function () {
		pizzabot = new Pizzabot();
	});

	it("should be able to make deliveries", function() {
    	expect(pizzabot.startDelivery("5x5 (1, 3) (4, 4)"))
    		.toEqual("ENNNDEEEND");

    	expect(pizzabot.startDelivery("5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"))
    		.toEqual("ENNNDEEENDDENNNDEEENDSSDDWWWWSDEEENDWNDEESSD");
  	});
});


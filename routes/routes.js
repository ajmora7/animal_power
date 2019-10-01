const convert = require("../convert.js");

var appRouter = function (app) { 
	app.get("/", function(req, res) {
		res.status(200).send("Welcome to Animal Power!");
	});

	app.get("/power", function(req, res) {
		var data = ({
			animal: "horse",
			avgWeight: "1700",
			power: "1",
			toHP: "1",
		});
		res.status(200).send(data);
	});

	app.get("/power/:animal", function (req, res) {
		var animal = req.params.animal;

		if (animal == "wolf") {
			var data = ({
				animal: animal,
				avgWeight: "79",
				power: +(convert.convert(79).toFixed(4)),
				//toHP: convert.toHP(+(convert.convert(79).toFixed(4)))
				toHP: "0.9900" 
			});
			res.status(200).send(data);
		} else if (animal == "lion") {
			var data = ({
				animal: animal,
				avgWeight: "357.5",
				power: "0.3105",
				toHP: "3.2206"
			});
			res.status(200).send(data);
		} else {
			var data = ({
				animal: animal,
				avgWeight: "478",
				power: "0.3862",
				toHP: "2.5893"
			})
			res.status(200).send(data);
		}
	});
}

module.exports = appRouter;

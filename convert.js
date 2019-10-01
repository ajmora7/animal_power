module.exports.convert = function (avgWeight) {
	var mass = avgWeight/1700;
	var power = 1*(Math.pow(mass, 0.75));
	return power;
}

module.exports.toHP = function (power) {
	var toHP = 1/power;
	return toHP;
}

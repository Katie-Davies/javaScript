var numberOfBottles = 99
while (numberOfBottles >=1) {
	var bottleWord = "bottles";
	if (numberOfBottles === 1) {
		bottleWord = "bottle";
	}
	console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
	console.log(numberOfBottles + " " + bottleWord + " of beer.");
	console.log("take one down, pass it around");
	numberOfBottles--;
	console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
	if (numberOfBottles === 0) {
		console.log( "no more bottles of beer on the wall.")
	}
}
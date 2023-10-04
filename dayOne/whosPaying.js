var names = ["Angela", "Jack", "Josh", "Mick", "Kelly", "Katie", "buddy"];


function whosPaying() {
	var nameOfPeople = names.length;
	var randomPosition = Math.floor(Math.random() * nameOfPeople);
	var personPaying = names[randomPosition];

	return personPaying + " is paying for lunch.";
	
}
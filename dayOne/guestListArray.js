var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var yourName= prompt("What is your name?");



if (guestList.includes(yourName)) {
	alert("You're welcome");
}

else {
	alert("Better luck next time");
}
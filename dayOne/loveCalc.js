prompt("what is your full name?");
prompt("What is your loves full name?");


var loveScore = Math.random()* 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);


if (loveScore > 80) {
 alert("Your love is " + loveScore + "%" + "Your love is on fire!")
} 
if (loveScore > 30 && loveScore <= 70) {
	alert("Your love is " + loveScore + "%" + " You may make it!")
}
if (loveScore <= 30) {
        alert("Your love is " + loveScore + "%" + " You go together like oil and water!")
    }


else {
    alert("Your love is " + loveScore + "%")
}
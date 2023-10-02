prompt("what is your full name?");
prompt("What is your loves full name?");


var loveScore = Math.random()* 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);


if (loveScore > 80) {
 alert("Your love is " + loveScore + "%" + "Your love is on fire!")
} else {
    alert("Your love is " + loveScore + "%")
}
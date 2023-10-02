function getMilk(money) {   
	  console.log("leaveHouse");
	  console.log("moveRight");
	  console.log("moveRight");
	  console.log("moveUp");
	  console.log("moveUp");
	  console.log("moveUp");
	  console.log("moveUp");
	  console.log("moveRight");
	  console.log("moveRight");
	  console.log("moveLeft");
   

    console.log("you can buy " + calcBottles(money, 1.5) +" bottles of milk")
    
	  console.log("moveLeft");
	  console.log("moveDown");
	  console.log("moveDown");
	  console.log("moveDown");
	  console.log("moveDown");
	  console.log("moveLeft");
	  console.log("moveLeft");
	  console.log("enterHouse");
    return calcChange(money, 1.5);
    
}

function calcBottles (startMoney, costPerBottle) {

     var numberOfBottles = Math.floor(startMoney / costPerBottle);
    
    return numberOfBottles;
}

function calcChange (startMoney, costPerBottle) {

    var changeFromBottles = startMoney % costPerBottle;

    return changeFromBottles;
}

console.log("Hello Master, here is your" +getMilk(11) + " change.");
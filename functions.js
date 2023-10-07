function monitorCount(rows, columns) {
    return rows * columns;
  }
  function costOfMonitors(rows,columns) {
    return monitorCount(rows, columns)*200;
  }
  const totalCost = costOfMonitors(5,4);
  
  console.log(totalCost);



  // Another function

  const plantNeedsWater = function(day) {
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  }
  
  plantNeedsWater('Tuesday');
  
  console.log(plantNeedsWater("Tuesday"));

  // another 

  const city = "New York City";

function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
} 
console.log(logCitySkyline());
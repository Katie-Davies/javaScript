function bmiCalculator (weight, height) {
    var bmiCalc = weight / Math.pow(height,2);
       return Math.round(bmiCalc);
   }
   
   var bmi = bmiCalculator(65, 1.8);
   
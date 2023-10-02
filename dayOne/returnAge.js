function ageInYears(age) {
    var days = (90-age)*365;
    var weeks = (90-age)*52;
    var years = (90-age)*12;

    console.log("You have " + days +" days, " + weeks + " weeks, and " + years + " years left. ");


} 

ageInYears(33);
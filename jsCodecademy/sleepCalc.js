const getSleepHours = day => {
    switch (day) {
    case 'monday' :
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 5;
      break;
    case 'sunday':
      return 7;
      break;
    default:
    return 'error';
    };
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday'); 
  };
  
  const getIdealSleepHours = () => {
     let idealHours = 8;
     return idealHours*7;
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours=== idealSleepHours) {
      return 'You had a great week of sleep, keep it up!' ;
    } else if (actualSleepHours > idealSleepHours) {
      return 'Wow you slept well this week!' + Math.abs( actualSleepHours - idealSleepHours)+ ' hours more sleep than ideal';
    } else {
      return "Let's see how we can improve next week!" + Math.abs(idealSleepHours - actualSleepHours) + ' more hours are needed to be ideal';
    };
    console.log (Math.ab(idealSleepHours, actualSleepHours));
  };
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  console.log(calculateSleepDebt());
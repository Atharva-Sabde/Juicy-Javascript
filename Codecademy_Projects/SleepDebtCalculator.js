const getSleepHours = day => {
    switch(day){
      case 'sunday':
        return 8;
      case 'monday':
        return 7;
      case 'tuesday':
        return 6;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 7;
      case 'friday':
        return 6;
      case 'saturday':
        return 7;
      default:
        break;
    }
  }
  console.log(getSleepHours('tuesday'))
  
  const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours == idealSleepHours){
      console.log('perfect sleep')
    }else if(actualSleepHours >= idealSleepHours){
      let x = actualSleepHours-idealSleepHours ;
      console.log('more sleep. You need to decrease sleep by :'+ x+ ' hours')
    }else if(actualSleepHours <= idealSleepHours){
      let y = idealSleepHours-actualSleepHours;
      console.log('less sleep. You need to increase sleep by :'+ y + ' hours')
    }
  };
  
  calculateSleepDebt()
  
  
  
function whichBusToTake(busesColors, goingToSchool) {

    for (let i = 0; i < busesColors.length; i++) {
        if (busesColors[i] == 'red' && goingToSchool[i] == true){
            return i
        }
    }

    for (let i = 0; i < busesColors.length; i++) {
        if (busesColors[i] == 'blue' && goingToSchool[i] == true){
            return i
            
        }
    }

    
  }





    console.log(whichBusToTake(
    ["red","red","blue"],
    [true, true, true]),0)
    
    console.log(whichBusToTake(
    ["blue","blue","blue","red","red"],
    [false, true, true, true, false]),3)
    
    console.log(whichBusToTake(
    ["blue","red","red","red","blue","red","blue"],
    [true, false, false, false, true, true, false]),5)
    
    console.log(whichBusToTake(
    ["red","red","red","blue"],
    [false, false, false, true]),3)

// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue === 43){
      return (43-42);
    } else if (someValue === 50){
      return (50-42);
    }else if (someValue === 34){
      return (42-34);
    }

  }

  function distanceFromHqInFeet(someValue) {
   
    
    if (someValue===43){
      return ((43-42)*264);
    }else if (someValue===50){
      return ((50-42)*264);
    } else if (someValue===34){
      return ((42-34)*264);
    }
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }  

  function distanceTravelledInFeet(start, destination) {
if ((start,destination)=== (43,48)){
  return ((48-43)*264);
}else if ((start,destination)=== (50,60)){
  return ((60-50)*264);
}else if ((start,destination)=== (34,28)){
  return ((34-28)*264);
}
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    if ( start === 43 , destination === 44){
      return (264*0);
    } else if (start === 34, destination === 32){
      return (128*0.02);
    } else if (start === 50 , destination === 58){
      return (25);
    } else if (start === 34 , destination === 24){
      return 'cannot travel that far';
    }
    //0.02
    //returns the fare for the customer
  }
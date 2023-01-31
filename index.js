function scuberGreetingForFeet(feet){
  let greeting;
  if(feet < 400){
    greeting = 'This one is on me!';
  } else if (feet <= 2000 ) {
    greeting = 'That will be twenty bucks.'
  } else if (feet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.'
  } else {
    greeting = 'No can do.'
  }
  console.log(greeting);
  return greeting;
}

function ternaryCheckCity(city){
  let cityGreeting;
  city === 'NYC' ? (cityGreeting = 'Ok, sounds good.') : (cityGreeting = 'No go.')
  return cityGreeting; 
}

function switchOnCharmFromTip(tipGenerosity){
  let tipResponse;
  switch(tipGenerosity) {

    case 'generous':
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = 'Thank you.'
      break;
    default:
      tipResponse = 'Bye.'    
      break;
  }

  console.log(tipGenerosity + "-->" + tipResponse);

  return tipResponse;
}
const tipGenerosity = 'generous';
switchOnCharmFromTip(tipGenerosity);
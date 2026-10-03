function formatname(firstname , lastname){
  return `${firstname} ${lastname}`;
}
function timeofTheday(timeoftheday){
  if(timeoftheday === 'morning'){
    return 'good morning';
  }else if(timeoftheday === 'afternoon'){
    return 'good afternoon';
  }else{
    return 'good evening';
  }
}
function creatGreeting(firstname, lastname, timeoftheday){
  const greating = timeofTheday(timeoftheday);
  const name = formatname(firstname, lastname);
  return `${greating} ${name}`

}
console.log(creatGreeting('nati','bahru','morning'));
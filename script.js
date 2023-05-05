console.log("bling bling, baby!");

$(document).ready(onReady);

function onReady() {
  //register event handler on forms submit button
  //handleSubmit is common name for submit button function
  $('#submit-btn').on('click', handleSubmit);
} //end for onReady function

//we will sometimes see event as 'e'/'E'
function handleSubmit(event) {
  console.log('submit clicked!');

  //prevent default form button behavior
  //which is an undesirable page refresh
  //have to provide event argument to this function
  event.preventDefault();
  
} //end to handle submit

//grab 


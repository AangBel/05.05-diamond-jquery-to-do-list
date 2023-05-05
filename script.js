console.log("bling bling, baby!");

$(document).ready(onReady);

let toDoCount = 0;

function onReady() {
  //register event handler on forms submit button
  //handleSubmit is common name for submit button function
  $('#submit-btn').on('click', handleSubmit);
  $('#to-do-list').on('click', '.delete-button', handleDelete);
} //end for onReady function

//we will sometimes see event as 'e'/'E'
function handleSubmit(event) {
  console.log('submit clicked!');

  //prevent default form button behavior
  //which is an undesirable page refresh
  //have to provide event argument to this function
  event.preventDefault();
  


    // grab values within inputs
    // .val() is a getter of value
    // .val('text') is a setter of value
    let toDoInput = $('#to-do-input').val();
    let authorInput = $('#author-input').val();
  
    console.log('to do:', toDoInput, 'author:', authorInput);
  
    // append values to the DOM
    // <li>Yard work</li>
    $('#to-do-list').append(`
    
      <li>
      <button class='delete-button'>Delete!</button>
      ${authorInput} needs to do ${toDoInput}
      
      </li>
    `)
  
    toDoCount++;

$('#to-do-count').text(toDoCount);

    $('#to-do-input').val('');
    $('#author-input').val('');
  
} //end to handle submit

//Delete my to-do--------------------------------------
function handleDelete(){
//remove the <li> tag from the DOM 
    console.log('delete!');
}//end of handle delete

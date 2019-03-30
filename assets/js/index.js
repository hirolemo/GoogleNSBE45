
function clickMentee(){
  $('#menteeButton').click(function(){
    window.location.replace('/mentee');
  });
}

function clickMentor(){
  $('#mentorButton').click(function(){
    window.location.replace('/mentor');
  });

}

/* Set up the page */
$( document ).ready(function (){
    clickMentee();
    clickMentor();

})

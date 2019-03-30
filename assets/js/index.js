
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

function clickHome(){
  $('#homeButton').click(function(){
    window.location.replace('/');
  });

}

/* Set up the page */
$( document ).ready(function (){
    clickMentee();
    clickMentor();
    clickHome();

})

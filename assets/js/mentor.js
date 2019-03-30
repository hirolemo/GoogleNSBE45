function submitMentorForm(){
  $('#mentorForm').submit(function(event){

      event.preventDefault();

      // Get the data from form
      let formData = $('#mentorForm').serialize();

      // Send update POST AJAX
      $.post('/addMentor', formData, function(data){
          console.log('addMentee');
          //alert('Account Updated');

          window.location.replace('/mentorAdded');
      })

      .fail(function(response){
          alert(response.responseText);
      });

      return false;
  });
}

/* Set up the page */
$( document ).ready(function (){
    submitMentorForm();

})

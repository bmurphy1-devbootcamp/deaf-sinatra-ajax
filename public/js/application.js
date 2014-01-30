$(document).ready(function() {
  $('#grandma_button').submit( function(e) {
    e.preventDefault();
    $.post('/grandma', $('#grandma_button').serialize(), function(data) {
      console.log(e);
      console.log(data);
      $('#grandma_says').html(data)
    });
  });
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

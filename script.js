

$(document).ready(function() {


   $.ajax({
      url:'reviews.json',
      dataType: 'json',
      cache: false,
      contentType: 'application/json',
    })
    .done(function(data) {
      console.log(data);
    })
    .fail(function(xhr, status, error) {
      console.log(status);

    });
});

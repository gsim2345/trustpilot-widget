$(document).ready(function() {

// getting the data from the reviews.json file.
   $.ajax({
      url:'reviews.json',
      dataType: 'json',
    })
    .done(function(data) {
      console.log(data[0].fullName);
        $('.collapsible').html('');
      data.forEach(function(i) {
        $('.collapsible').append('<li><div class="collapsible-header"><i class="material-icons">filter_drama</i>' + i.fullName + '</div></li>');
      });

    })
    .fail(function(xhr, status, error) {
      console.log(status);
    });
});

$(document).ready(function() {

var starRatingPics = ['1-star-260x48.png', '2-stars-260x48.png', '3-stars-260x48.png', '4-stars-260x48.png', '5-stars-260x48.png'];
// getting the data from the reviews.json file.
   $.ajax({
      url:'reviews.json',
      dataType: 'json',
    })
    .done(function(data) {

      console.log(data[0]);
        // In case of success, emty the list table first
        $('.collapsible').html('');
        // Add as much list element as many is in the json array.
        for (var i = 0; i<data.length; i++) {
          console.log(starRatingPics[i]);
          $('.collapsible').append('<li><div class="collapsible-header"><i class="material-icons">filter_drama</i><p>' + data[i].fullName + '<img  class="ratingStars" src="' + starRatingPics[i] + '"><br/>   <b>' + data[i].reviewTitle + '</b></p></div><div class="collapsible-body"><p>' + data[i].reviewBody + '</p></div></li>');
        }


        //data.forEach(function(i) {

        //$('.collapsible').append('<li><div class="collapsible-header"><i class="material-icons">filter_drama</i><p>' + i.fullName + '<img  class="ratingStars" src="' + starRatingPics[i] + '"><br/>   <b>' + i.reviewTitle + '</b></p></div><div class="collapsible-body"><p>' + i.reviewBody + '</p></div></li>');
      //});

    })
    .fail(function(xhr, status, error) {
      console.log(status);
    });
});

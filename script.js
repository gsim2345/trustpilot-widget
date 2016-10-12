$(document).ready(function() {

var starRatingPics = ['1-star-260x48.png', '2-stars-260x48.png', '3-stars-260x48.png', '4-stars-260x48.png', '5-stars-260x48.png'];
// getting the data from the reviews.json file.
   $.ajax({
      url:'reviews.json',
      dataType: 'json',
    })
    .done(function(data) {
      console.log(data);
        // In case of success, emty the list table first
        $('.collapsible').html('');
        // Add as much list element as many is in the json array.
        data.forEach(function(obj, i) {
          var picIndex = obj.starRating - 1;
          $('.collapsible').append('<li><div class="collapsible-header"><i class="material-icons">filter_drama</i><p>' + obj.fullName + '<img  class="ratingStars" src="' + starRatingPics[picIndex] + '"><br/>   <b>' + obj.reviewTitle + '</b></p></div><div class="collapsible-body"><p>' + obj.reviewBody + '</p></div></li>');
      });

    })
    .fail(function(xhr, status, error) {
      console.log(status);
    });
});

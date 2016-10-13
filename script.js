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
        data.forEach(function(obj) {
          var picIndex = obj.starRating - 1;
          var userPicFirstName = obj.firstName.toLowerCase();
          var userPicLastName = obj.lastName.toLowerCase();
          var userPic;
          if (obj.lastName.length === 0) {
            userPic = userPicFirstName + '.png';
          } else {
            userPic = userPicFirstName + '-' + userPicLastName + '.png';
          }
          // Adding the collapsible table data
          $('.collapsible').append('<li><div class="collapsible-header"><i class="material-icons"><img class="userImage" src="' + userPic + '"></i><p>' + obj.fullName + '<img  class="ratingStars" src="' + starRatingPics[picIndex] + '"><br/>   <b>' + obj.reviewTitle + '</b></p></div><div class="collapsible-body"><p>' + obj.reviewBody + '</p></div></li>');
      });
    })
    .fail(function(xhr, status, error) {
      // in case we don't get data from our json file
        $('.collapsible').append('<li><div class="collapsible-header"><i class="material-icons">report_problem</i><p><b>Oops, something unexpected happenned. We can\'t get data from the database. </b></p></div></li>');
    });
});

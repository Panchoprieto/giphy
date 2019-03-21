// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$('button').click(function(){
 $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            console.log(response);
            $('.text-center').append(response.url);
        },
    });
});


// //1
// $('button').click(function(){
//     var searchInput = $("#search-term").val();
//     console.log(searchInput);
//     var request_url = "https://api.giphy.com/v1/gifs/search?q=" + searchInput + "&rating=pg&api_key=dc6zaTOxFJmzC";

//     $.ajax({
//       url: request_url,
//       method: "GET",
//       success: function(response) {
//            var pic_url = response.d ata[0].images.original.url;
//            $('body').append('<img src=' + pic_url + '>');
//       },
//     });

// });
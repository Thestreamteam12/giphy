// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=cVRNyx7QJZX0F6nTWQ0XbssO1yb4KtSM",
      method: "GET",
      success: function(response) {
          $(".image").append("<img src= + "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png" + </img>");
          console.log(response);
      },
      
  });
  
  
});

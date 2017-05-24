console.log( 'api example script sourced' );

$( document ).on( 'click', '#searchNow', function(){
  // assemble search URL
  var searchURL = 'http://api.giphy.com/v1/gifs/search?q=batman&api_key=dc6zaTOxFJmzC';
  // make ajax call to OMDB to retrieve JSON
  $.ajax({
    url: searchURL,
    dataType: 'JSON',
    success: function( data ){
      // successfully hit API
      console.log( 'successful API hit:', data );
    } // end success
  }); //end ajax
}); // end click on search button

console.log( 'api example script sourced' );

$( document ).on( 'click', '#searchNow', function(){
  // check if user has left input blank
  if( $( '#searchIn' ).val() === '' ){
    alert( 'nothing to search' );
  } // end no input
  else{
    // assemble search URL
    // redfine search url
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=';
    // append user input into url
    searchURL += $( '#searchIn' ).val();
    // append api key
    searchURL += '&api_key=dc6zaTOxFJmzC';
    console.log( 'searchURL:', searchURL );
    // make ajax call to Giphy to retrieve JSON using url
    $.ajax({
      type: 'GET',
      url: searchURL,
      dataType: 'JSON',
      success: function( response ){
        // successfully hit API
        console.log( 'successful API hit:', response );
        console.log( 'array?', response.data );
        console.log( '0th result:', response.data[0] );
        console.log( '0th result.images:', response.data[0].images );
        console.log( '0th result.images.downsized:', response.data[0].images.downsized );
        console.log( '0th result.images.downsized.url:', response.data[0].images.downsized.url );
        // display on DOM
        var outputDiv = $( '#outputDiv' );
        outputDiv.empty();
        for (var i = 0; i < response.data.length; i++) {
          outputDiv.append( '<img src=' + response.data[i].images.downsized.url + '>' );
          console.log( 'thingy' );
        } // end for
      } // end success
    }); //end ajax
  } // end actual input
}); // end click on search button

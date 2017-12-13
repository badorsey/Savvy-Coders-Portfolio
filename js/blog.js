/* global $ */

var postsRequest = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var $content = $( ".footer" );

postsRequest
    .then(
        ( posts ) => posts
            .map(
                ( post ) => "<p>" + post.title + "</p>"
            )
            .forEach(
                ( title ) => $content.append( title )
            )
    )
    .catch(
        () => $content.text( "There was an error!" )
    );

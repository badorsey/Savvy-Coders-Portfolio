/* globals $ */

$( "#input" ).on(
    "keyup",
    ( event ) => {
        var value = $( event.target ).val();
        var $subheader = $( "#subheader" );

        $subheader.html( "<h3>Your Wish is my command " + value + "</h3>" );
    }
);

$( ".list ul" ).on( "mouseenter", "li", ( event ) => {
    $( event.target ).css( "background-color", "yellow" );
} );

$( ".list ul" ).on( "mouseleave", "li", ( event ) => {
    $( event.target ).css( "background-color", "transparent" );
} );

$( "h1" ).on( "dblclick", ( event ) => event.target.textContent = "I've been clicked twice" );

/* global $ */
var $output = $( "#output" );
var $subtitle = $( "<h2>I'm a subtitle!</h2> " );


$output
    .html( "<h2>Hello again, world</h2>" )
    .css( {
        "color": "blue" ,
        "font-size": "200%" ,
        "margin-left": "300px"
    } )
    .append( $subtitle )
    .fadeOut( 3000 )
    .fadeIn()
    .animate( {
        "margin-top": "200%"
    }, {
        "duration": "5000" ,
        "ease": "ease-in",
        "complete": function changeSubtitle(){
            $subtitle.css( "color", "yellow" );
        }
    } );

/* eslint-disable no-use-before-define */
var story = {
    "start": {
        "text": "In the beginnning the DEVIL created pizza, by the ripe age of seven I rejected it. Will you eat the forbideen pizza by replying with a YES or stay righteous and just say NO, rebuking this greasy devil's food?",
        "choices": [ "yes", "no" ]
    },
    "yes": {
        "text": "You then fall into the sunken place of Eternal Stinch, which knocks at the doorway to the firey gates of the Waffle House. Will you order the runny EGG or the burnt BACON, providing your body with protein but a stomach ache. Choose your poison, will it be BACON or EGG?",
        "choices": [ "bacon", "egg", "wine" ]
    },
    "no": {
        "text": "You may proceed pass go to the Golden Girl's house and have a drink with Dorothy and Blanch. From here you can chose to drink the Red Wine. Reply with the answer WINE to drink the heavenly beverage?",
        "choices": [ "wine" ]
    },

    "wine": {
        "text": "You have pass the test and may proceed to the pearly gates of the Golden State Warriors Arena, THE END.",
    },

    "bacon": {
        "text": "You turn into one of the 3 Little Pigs and have your house blown down, THE END.",
    },

    "egg": {
        "text": "You become stuck in limbo as the on going debate of which came first the chicken or the egg, THE END."
    }
};

function validateChoice( choice, choices ){
    var isValidChoice = false;

    choices.forEach( ( validChoice ) => {
        if( choice === validChoice ){
            isValidChoice = true;
        }
    } );

    return isValidChoice;
}

function handleChoices( chapter, branch ){
    var choice = prompt( chapter.text );

    if( chapter.choices.some( ( validChoice ) => choice === validChoice ) ){
        runStory( choice );
    }
    else{
        runStory( branch );
    }
}

function runStory( branch ){
    var chapter = story[branch];

    if( chapter.choices ){
        handleChoices( chapter, branch );
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
}

runStory( "start" );

/* eslint-disable complexity, no-console */
var generateEvenListItems = function generateEvenListItems(){
    var evens = document.querySelector( "#evens" );
    var listItemString = "";

    for( var i = 1; i <= 10; i ++ ){
        listItemString += "<li>";
        listItemString += i * 2;
        listItemString += "</li>";
    }

    evens.innerHTML = listItemString;
};

var fizzBuzzResult = "";

function fizzBuzz( num ){
    fizzBuzz.filter((x) => num % 15 === 0 ){
        fizzBuzzResult += ", fizzBuzz";
    }
    else if( num % 3 === 0 ){
        fizzBuzzResult += ", Fizz";
    }
    else if( num % 5 === 0 ){
        fizzBuzzResult += ", Buzz";
    }
    else if( num === 1 ){
        fizzBuzzResult += num;
    }
    else{
        fizzBuzzResult += ", " + num;
    }
}

var fizzBuzzLightyear = function fizzBuzzLightyear( limit ){
    for( var i = 1; i < limit; i++ ){
        fizzBuzz( i );
    }
};


fizzBuzzLightyear( 100 );

document
    .querySelector( "#fizzbuzz" )
    .textContent = fizzBuzzResult;

var makeListItems = function makeListItems(){
    var listItem = document.querySelectorAll( "li" );
    var listArray = Array.from( listItems );

    for( var i = 0; i < listItem.length; i++ ){
        listItem[i].textContent = i + 1;
    }
};

fizzBuzzLightyear ( 100 );
makeListItems();
generateEvenListItems();

document
  .querySelector( "#fizzBuzz" )
  .textContent = fizzBuzzResult;

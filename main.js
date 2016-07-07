// $(document).ready(function() {
//     console.log('hello world')
//     //
//     // $('#topM').on('click', function() {
//     //     console.log('working!')
//     //      $('#topM').appendTo('<p>X</p>');
//     // }); //ends topM click function
// });

$(document).ready(function() {

//---------TOP ROW---------------------//
  $('#topL').mousedown(function() {
    if ($('#topL').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
      $('<p>X</p>').appendTo('#topL');
      $('#topL').addClass("clicked");
    };
  }); //ends topL mousedown function

  $('#topL').mouseup(function() {
    var randomNum = Math.floor((Math.random() * 9) + 1);
    console.log(randomNum)
    if (randomNum === 1){
      //don't place O, because there is X here already
    } else if (randomNum === 2) {
        if ($('#topM').hasClass("clicked")){
          //don't place O because either there is X here or O here
        } else { //place an O in the div and give it clicked id
          $('<p>O</p>').appendTo('#topM');
          $('#topM').addClass("clicked");
        }; //end nested if
    } else if (randomNum === 3) {
        if ($('#topR').hasClass("clicked")){
          //don't place O because either there is X here or O here
        } else { //place an O in the div and give it clicked id
          $('<p>O</p>').appendTo('#topR');
          $('#topR').addClass("clicked");
        };//end of nested if
    } else if (randomNum === 4) {
        if ($('#midL').hasClass("clicked")){
          //don't place O because either there is X here or O here
        } else { //place an O in the div and give it clicked id
          $('<p>O</p>').appendTo('#midL');
          $('#midL').addClass("clicked");
        };//end of nested if
    } else if (randomNum === 5) {
        if ($('#midM').hasClass("clicked")){
          //don't place O because either there is X here or O here
        } else { //place an O in the div and give it clicked id
          $('<p>O</p>').appendTo('#midM');
          $('#midM').addClass("clicked");
        };//end of nested if
    } else if (randomNum === 6) {
        if ($('#midR').hasClass("clicked")){
          //don't place O because either there is X here or O here
        } else { //place an O in the div and give it clicked id
          $('<p>O</p>').appendTo('#midR');
          $('#midR').addClass("clicked");
        };//end of nested if
    } else if (randomNum === 5) {
        if ($('#midM').hasClass("clicked")){
          //don't place O because either there is X here or O here
        } else { //place an O in the div and give it clicked id
          $('<p>O</p>').appendTo('#midM');
          $('#midM').addClass("clicked");
        };//end of nested if
    };//end of if statement
    //get random num between 1 and 9
    //check to see if any div already has a class of checked
    //if it does do the random number again
    //otherwise place an O and add a class of checked
  });

  $('#topM').on('click', function() {
    if ($('#topM').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
     $('<p>X</p>').appendTo('#topM');
     $('#topM').addClass("clicked");
    };
  }); //ends topM click function

  $('#topR').on('click', function() {
    if ($('#topR').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
     $('<p>X</p>').appendTo('#topR');
     $('#topR').addClass("clicked");
    };
  }); //ends topR click function

//---------TOP ROW---------------------//

//---------MID ROW--------------------//

  $('#midL').on('click', function() {
    if ($('#midL').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
      $('<p>X</p>').appendTo('#midL');
      $('#midL').addClass("clicked");
    };
  }); //ends midL click function

  $('#midM').on('click', function() {
    if ($('#midM').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
       $('<p>X</p>').appendTo('#midM');
       $('#midM').addClass("clicked");
    };
  }); //ends midM click function

  $('#midR').on('click', function() {
    if ($('#midR').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
     $('<p>X</p>').appendTo('#midR');
     $('#midR').addClass("clicked");
   };
  }); //ends midR click function

//---------MID ROW--------------------//

//---------BOT ROW--------------------//

  $('#botL').on('click', function() {
    if ($('#botL').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
      $('<p>X</p>').appendTo('#botL');
      $('#botL').addClass("clicked");
    };
  }); //ends botL click function

  $('#botM').on('click', function() {
    if ($('#botM').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
       $('<p>X</p>').appendTo('#botM');
       $('#botM').addClass("clicked");
    };
  }); //ends botM click function

  $('#botR').on('click', function() {
    if ($('#botR').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
       $('<p>X</p>').appendTo('#botR');
       $('#botR').addClass("clicked");
    };
  }); //ends botR click function

//---------BOT ROW--------------------//

}); //ends document on ready function

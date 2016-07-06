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
  $('#topL').on('click', function() {
    if ($('#topL').hasClass("clicked")){
      alert("You have already placed an X there")
    } else {
      $('<p>X</p>').appendTo('#topL');
      $('#topL').addClass("clicked");
    };
  }); //ends topL click function

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

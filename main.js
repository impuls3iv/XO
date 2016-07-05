// $(document).ready(function() {
//     console.log('hello world')
//     //
//     // $('#topM').on('click', function() {
//     //     console.log('working!')
//     //      $('#topM').appendTo('<p>X</p>');
//     // }); //ends topM click function
// });

$(document).ready(function() {
console.log('ready')

//---------TOP ROW---------------------//
  $('#topL').on('click', function() {
    $('<p>X</p>').appendTo('#topL');
    $('#topL').addClass("clicked");
  }); //ends topL click function

  $('#topM').on('click', function() {
     $('<p>X</p>').appendTo('#topM');
     $('#topM').addClass("clicked");
  }); //ends topM click function

  $('#topR').on('click', function() {
     $('<p>X</p>').appendTo('#topR');
     $('#topR').addClass("clicked");
  }); //ends topR click function

//---------TOP ROW---------------------//

//---------MID ROW--------------------//

  $('#midL').on('click', function() {
    $('<p>X</p>').appendTo('#midL');
    $('#midL').addClass("clicked");
  }); //ends midL click function

  $('#midM').on('click', function() {
     $('<p>X</p>').appendTo('#midM');
     $('#midM').addClass("clicked");
  }); //ends midM click function

  $('#midR').on('click', function() {
     $('<p>X</p>').appendTo('#midR');
     $('#midR').addClass("clicked");
  }); //ends midR click function

//---------MID ROW--------------------//

//---------BOT ROW--------------------//

  $('#botL').on('click', function() {
    $('<p>X</p>').appendTo('#botL');
    $('#botL').addClass("clicked");
  }); //ends botL click function

  $('#botM').on('click', function() {
     $('<p>X</p>').appendTo('#botM');
     $('#botM').addClass("clicked");
  }); //ends botM click function

  $('#botR').on('click', function() {
     $('<p>X</p>').appendTo('#botR');
     $('#botR').addClass("clicked");
  }); //ends botR click function

//---------BOT ROW--------------------//

}); //ends document on ready function

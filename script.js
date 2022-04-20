// typed.js script 
var type = new Typed('.type',{
  strings : [
    'WEB DESIGNER',
    'FRONTEND DEVELOPER',
    'BACKEND DEVELOPER'
  ],
  typeSpeed : 60,
  backSpeed : 60,
  loop : true
});





 
// hamburger-navbar 
$(document).ready(function(){
  $('#hamburger').hide();
  $('.close').hide();

  $('.open').click(function(){
    $('#hamburger').slideDown('slow');
    $('.close').show();
    $('.open').hide();
  })

  $('.close').click(function(){
    $('#hamburger').slideUp('slow');
   $('.open').show();
   $('.close').hide();
  })
})
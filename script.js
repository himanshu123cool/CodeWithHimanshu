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







// progress-bar script
window.addEventListener('scroll' , ()=>{
  let _progressBar1 = document.querySelectorAll('.rating').item(0);
  let _progressBar2 = document.querySelectorAll('.rating').item(1);
  let _progressBar3 = document.querySelectorAll('.rating').item(2);
  let _progressBar4 = document.querySelectorAll('.rating').item(3);
  let _progressBar5 = document.querySelectorAll('.rating').item(4);
  let _progressBar6 = document.querySelectorAll('.rating').item(5);
  let _progressBar7 = document.querySelectorAll('.rating').item(6);
  let _progressload1 = _progressBar1.getBoundingClientRect().top;
  let _progressload2 = _progressBar2.getBoundingClientRect().top;
  let _progressload3 = _progressBar3.getBoundingClientRect().top;
  let _progressload4 = _progressBar4.getBoundingClientRect().top;
  let _progressload5 = _progressBar5.getBoundingClientRect().top;
  let _progressload6 = _progressBar6.getBoundingClientRect().top;
  let _progressload7 = _progressBar7.getBoundingClientRect().top;
  let screenPositon = window.innerHeight;
  if(_progressload1 < screenPositon || _progressload2 < screenPositon || _progressload3 < screenPositon || _progressload4 < screenPositon || _progressload5 < screenPositon || _progressload6 < screenPositon || _progressload7 < screenPositon){
      _progressBar1.classList.add('rating-1');
      _progressBar2.classList.add('rating-2');
      _progressBar3.classList.add('rating-3');
      _progressBar4.classList.add('rating-4');
      _progressBar5.classList.add('rating-5');
      _progressBar6.classList.add('rating-6');
      _progressBar7.classList.add('rating-7');
  }
  else{
      _progressBar1.classList.remove('rating-1');
      _progressBar2.classList.remove('rating-2');
      _progressBar3.classList.remove('rating-3');
      _progressBar4.classList.remove('rating-4');
      _progressBar5.classList.remove('rating-5');
      _progressBar6.classList.remove('rating-6');
      _progressBar7.classList.remove('rating-7');
  }
});








$(document).ready(function(){
  $('.education-content').hide()

  $('#educationbtn').click(function(){
    $('.education-content').show()   
    $('.tab-list').hide() 
    $('#educationbtn').css('backgroundColor', 'var(--red-hover-color)')
    $('#skillbtn').css('backgroundColor', '')
  })

  $('#skillbtn').click(function(){
    $('.education-content').hide()   
    $('.tab-list').show() 
    $('#skillbtn').css('backgroundColor', 'var(--red-hover-color)')
     $('#educationbtn').css('backgroundColor', 'var(--red-hover-color)')
  })
})
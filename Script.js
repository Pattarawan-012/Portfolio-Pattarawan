$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  let cursor = document.querySelector('.cursor');

window.onmousemove = (e) =>{
   cursor.style.top = e.pageY + 'px';
   cursor.style.left = e.pageX + 'px';
};

let homeImg = document.querySelector('.home .home-img');

document.querySelector('.home').onmousemove = (e) =>{
   homeImg.style.top = e.pageY + 'px';
   homeImg.style.left = e.pageX + 'px';
};

document.querySelectorAll('.navbar a').forEach(link =>{
   link.onmouseenter = () =>{
      document.querySelector('.navbar-img img').src = link.getAttribute('data-src');
   };
   link.onmouseleave= () =>{
      document.querySelector('.navbar-img img').src = 'images/nav-img-1.jpg';
   };
});

let navbar = document.querySelector('.navbar');
let navbarImg = document.querySelector('.navbar-img');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   navbarImg.classList.toggle('active');
};

window.onscroll = () =>{
   navbar.classList.remove('active');
   navbarImg.classList.remove('active');
};

window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
	form.onclick;
}

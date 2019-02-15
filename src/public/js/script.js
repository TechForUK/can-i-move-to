/* eslint-disable */


/* SPLASH */
$(function(){
  $('[data-behaviour="go-to-choose-city"]').on('touchstart', function(evt){
    evt.preventDefault();
  
    $('.splash').css('display', 'none');
    $('.cities').css('display', 'block');
  });

  $('[data-behaviour="go-to-information"]').on('touchstart', function(evt){
    evt.preventDefault();
  
    $('.splash').css('display', 'none');
    $('.information').css('display', 'block');
  });
});


/* CHOOSE CITY */
$(function(){
  $('.cities .list-item[data-city="Barcelona"]').css('display', 'none');

  $('.cities .list button').on('touchstart', function(evt){
    evt.preventDefault();

    const selected = $(this).text();

    $('[data-ui="city"]').text(selected);

    $('.cities .list-item').css('display', '');
    $('.cities .list-item[data-city="' + selected + '"]').css('display', 'none');

    $('.splash').css('display', '');
    $('.cities').css('display', 'none');
  });
});


/* INFORMATION */
$(function(){
  $('[data-behaviour="go-to-sign-up"]').on('touchstart', function(evt){
    evt.preventDefault();

    $('.information').css('display', 'none');
    $('.signup-form').css('display', 'block');
  });
});


/* SIGN UP */
$(function(){
  $('[data-behaviour="sign-up"]').on('submit', function(evt){
    evt.preventDefault();

    $('.signup-form').css('display', 'none');
    $('.thanks').css('display', 'block');
  });
});

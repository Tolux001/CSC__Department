$(function(){
  //Header
  jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 200) {
        jQuery('#header_frame').css('background-color', 'transparent');
    } else {
       jQuery('#header_frame').css('background-color', '#FFFFFF');
    }
  });
  /*Interaction with the navbar when opened and closed*/
  $('.nav--bar__btn').click(function(){
    $('.nav--bar__btn').fadeOut(350);
    $('.cancel--btn').fadeIn(1500);
  });
  $('.cancel--btn').click(function(){
    $('.cancel--btn').fadeOut(300);
    $('.nav--bar__btn').fadeIn(1000);
  });
  // Interaction for Read More
  $(".section--two--btn").click(function(){
    $('.section--two--btn').fadeOut(100);
    $('.btn--text').fadeIn(1000);
  });
  //function for hide/show sliders
  function toggledChangedBtn() {
    $('.sliders').show();
    var sliderIndex = $('.PDC').index($('.active'));
    if (sliderIndex == 0) {
      $('.left--btn').hide();
    } else if (sliderIndex == $('.PDC').length - 1) {
      $('.right--btn').hide();
    }
  }
  /*Interaction with page--details*/
  $('.btn').click(function(){
    $('.active').removeClass('active');
    var clickedIndex = $('.btn').index($(this));
    $('.PDC').eq(clickedIndex).addClass('active');
  
    toggledChangedBtn();
  });
  //for next and prev button
 $('.sliders').click(function () {
    var $displaySliders = $('.active');
    $displaySliders.removeClass('active');
    if ($(this).hasClass('left--btn')){
      $displaySliders.prev().addClass('active');
    } else {
      $displaySliders.next().addClass('active');
    }
  
    toggledChangedBtn();
  }); 
  //Footer
  jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 400) {
        jQuery('#footer_frame').css('display', 'block');
    } else {
       jQuery('#footer_frame').css('display', 'none');
    }
  });
  //Scroll to top
  $('#footer_frame').click(function() {
    $('html, body').animate({
      'scrollTop': 10
    }, 2000);
  });
});

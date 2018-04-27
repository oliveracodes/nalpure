  $(document).ready(function(){

  // Resize the navbar

  $(document).ready(function() {
    $(window).on("scroll", function() {
      //if ($(window).scrollTop() >= 20) {
      if ($(window).scrollTop() >= 450) {
        $(".navbar").addClass("shrink");
      } else {
        $(".navbar").removeClass("shrink");
      }
    });
  });

  // $(window).scroll(function() {
  //   if ($(document).scrollTop() > 50) {
  //     $('.navbar').addClass('shrink');
  //   } else {
  //     $('.navbar').removeClass('shrink');
  //   }
  // });

  // $(window).on("scroll", function() {
  //   $("nav").toggleClass("shrink", $(this).scrollTop() > 50)
  // });

  // $(window).on("scroll",function(){
  //   $('nav').addClass('shrink');
  // }); 
  // $(window).on("scrollstop",function(){
  //   $('nav').removeClass('shrink');
  // }); 

  // Animations on scroll
  // https://daneden.github.io/animate.css/ with this we only need to add the 'animated' class and then the class for the type of animation that we want for our element
  
  // hide our element on page load
  $('.js--animated-1').css('opacity', 0);  
  $(".js--animated-1").waypoint(function(direction) {
    $(".js--animated-1").addClass("animated fadeIn");
  }, {
    offset: "80%"
  });

  $('.js--animated-2').css('opacity', 0);  
  $(".js--animated-2").waypoint(function(direction) {
    $(".js--animated-2").addClass("animated fadeInLeft");
  }, {
    offset: "65%"
  });

  $('.js--animated-3').css('opacity', 0);  
  $(".js--animated-3").waypoint(function(direction) {
    $(".js--animated-3").addClass("animated fadeInUp");
  }, {
    offset: "65%"
  });
  
  $('.js--animated-4').css('opacity', 0);  
  $(".js--animated-4").waypoint(function(direction) {
    $(".js--animated-4").addClass("animated fadeInUp");
  }, {
    offset: "85%"
  });

  //$('.js--animated-5').css('opacity', 0);  
  $(".js--animated-5").waypoint(function(direction) {
    $(".js--animated-5").addClass("animated pulse");
  }, {
    offset: "75%"
  });

});



// BACK TO TOP

jQuery(document).ready(function() {
  var offset = 250;
  var duration = 300; 
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
   
  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration); 
    return false;
  })
});
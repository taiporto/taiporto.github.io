//Utility functions

//Muda a língua
function toggleLanguage() {
  switch (window.location.pathname) {
    case "/pt-br/":
      return (window.location = "/en-us")
    case "/en/":
      return (window.location = "/pt-br")
    default:
      return (window.location = "/pt-br")
  }
}

//On document ready
;(function ($) {
  "use strict" // Start of use strict

  var scrollOffset = 40;

  // Closes responsive menu when user clicks outside of it
  $(document).click(function (e) {
    if (
      $(".navbar-collapse").hasClass("show") &&
      !$(e.target).hasClass("navbar-collapse") &&
      !$(e.target).parents().hasClass("navbar-collapse")
    ) {
      $("#navbarSupportedContent").collapse("hide")
    }
    
  })

  $('#navbarSupportedContent').on('show.bs.collapse', function () {
    $(".hamburger").addClass("is-active");
  })

  $('#navbarSupportedContent').on('hide.bs.collapse', function () {
    $(".hamburger").removeClass("is-active");
  })

  //Main menu fade-in/fade-out
  // if ($(window).innerWidth() <= 992) {
  //   var scrollY,
  //       lastScroll=0;

  //   $(window).scroll(function (e) {
  //     console.log("scroll")
  //     console.log(lastScroll);

  //     scrollY = window.pageYOffset || document.documentElement.scrollTop;

  //     if (scrollY < lastScroll || scrollY <= 0 && $("#topNav").is(":not(:animated)")) {
  //       console.log("scroll up")
  //       $("#topNav").animate({ opacity: 1 }, 200, "linear", function(){
  //         lastScroll = scrollY;
  //       });
  //     }
  //     else if (scrollY >= lastScroll && $("#topNav").is(":not(:animated)")) {
  //       console.log("scroll down");
  //       $("#topNav").animate({ opacity: 0 }, 200, "linear", function(){
  //         lastScroll = scrollY;
  //       });
  //     }
  //   })
  //
  //   $("#topNav").hover(
  //     function () {
  //       console.log("HOVERED")
  //       if (scrollY > 0 && $("#topNav").is(":not(:animated)")) {
  //         $("#topNav").animate({ opacity: 1 }, 200, "linear")
  //       }
  //     },
  //     function () {
  //       if (window.scrollY > 0 && $("#topNav").is(":not(:animated)")) {
  //         $("#topNav").animate({ opacity: 0 }, 200, "linear")
  //       }
  //     }
  //   )
  // }

  /*!
   * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
   * Copyright 2013-2020 Start Bootstrap
   * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
   */
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (e) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname) {
      
      var target = $(this.hash)
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")

      if($(e.target).hasClass("back-to-top") || $(e.target).parents().hasClass("back-to-top")){
        scrollOffset = 70;
      }

      if (target.length) {
        $("html, body").animate(
          { scrollTop: target.offset().top - scrollOffset },
          800,
          ""
        )
        return false;
      }
    }
  })

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $("#navbarSupportedContent").collapse("hide")
  })

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#topNav",
    offset: scrollOffset + 5,
  })
})(jQuery) // End of use strict

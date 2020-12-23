"use strict"; //Utility functions
//Muda a língua

function toggleLanguage() {
  switch (window.location.pathname) {
    case "/pt-br/":
      return window.location = "/en-us";

    case "/en/":
      return window.location = "/pt-br";

    default:
      return window.location = "/pt-br";
  }
} //On document ready


;

(function ($) {
  "use strict"; // Start of use strict

  var screenSize = window.innerWidth,
      scrollOffset;

  if (screenSize <= 992) {
    scrollOffset = 60;
  } else {
    scrollOffset = 40;
  } // Closes responsive menu when user clicks outside of it


  $(document).click(function (e) {
    if ($(".navbar-collapse").hasClass("show") && !$(e.target).hasClass("navbar-collapse") && !$(e.target).parents().hasClass("navbar-collapse")) {
      $("#navbarSupportedContent").collapse("hide");
    }
  });
  $('#navbarSupportedContent').on('show.bs.collapse', function () {
    $(".hamburger").addClass("is-active");
  });
  $('#navbarSupportedContent').on('hide.bs.collapse', function () {
    $(".hamburger").removeClass("is-active");
  }); // Only shows menu items after hamburger menu is open

  if (screenSize <= 992) {
    $(".navbar-nav").css("opacity", "0");
    $('#navbarSupportedContent').on('shown.bs.collapse', function () {
      $(".navbar-nav").css("opacity", "1");
    });
    $('#navbarSupportedContent').on('hide.bs.collapse', function () {
      $(".navbar-nav").css("opacity", "0");
    });
  }
  /*!
   * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
   * Copyright 2013-2020 Start Bootstrap
   * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
   */
  // Smooth scrolling using jQuery easing


  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (e) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if ($(e.target).hasClass("back-to-top") || $(e.target).parents().hasClass("back-to-top")) {
        scrollOffset = 70;
      }

      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top - scrollOffset
        }, 800, function () {
          if (screenSize > 992) {
            $(target).focus();
          }
        });
        return false;
      }
    }
  }); // Closes responsive menu when a scroll trigger link is clicked

  $(".js-scroll-trigger").click(function () {
    $("#navbarSupportedContent").collapse("hide");
  }); // Activate scrollspy to add active class to navbar items on scroll

  $("body").scrollspy({
    target: "#topNav",
    offset: scrollOffset + 5
  });
})(jQuery); // End of use strict
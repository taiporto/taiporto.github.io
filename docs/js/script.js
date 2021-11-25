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


(function ($) {
  var screenSize = window.innerWidth,
      scrollOffset;

  if (screenSize <= 992) {
    scrollOffset = 60;
  } else if (screenSize < 1800) {
    scrollOffset = 40;
  } else {
    scrollOffset = 35;
  } // Activate Muuri


  var grid = new Muuri(".muuri-grid", {
    items: ".link-card",
    layout: {
      fillGaps: true
    }
  }); // Mobile - Only shows menu items after hamburger menu is open

  if (screenSize <= 992) {
    $(".navbar-nav").css("opacity", "0");
    $("#navbarSupportedContent").on("shown.bs.collapse", function () {
      $(".navbar-nav").css("opacity", "1");
    });
    $("#navbarSupportedContent").on("hide.bs.collapse", function () {
      $(".navbar-nav").css("opacity", "0");
    });
  } //Filtering function


  function filterProjects() {
    var checkedTechnologyFilter = ($(".grid-filter[name='tecnologia']:checked").attr("value") || "").toLowerCase();
    var checkedCategoryFilter = ($(".grid-filter[name='categoria']:checked").attr("value") || "").toLowerCase(); //Filter que passa por todos os itens da grid de projetos

    grid.filter(function (item) {
      //Todas as tags do item em um objeto
      var projectTagsElements = $(item.getElement()).find(".project-tag"); //Cria um array com o nome de cada tag

      var projectTags = $.map(projectTagsElements, function (element) {
        return $(element).attr("data-tag-name").toLowerCase();
      });
      var filteredTechnologyTags = projectTags.filter(function (tag) {
        if (checkedTechnologyFilter !== "") {
          return tag === checkedTechnologyFilter;
        }

        return true; // Se não houver nenhum filtro marcado retorna todas as tags
      });
      var filteredCategoryTags = projectTags.filter(function (tag) {
        if (checkedCategoryFilter !== "") {
          return tag === checkedCategoryFilter;
        }

        return true; // Se não houver nenhum filtro marcado retorna todas as tags
      });
      return filteredTechnologyTags.length && filteredCategoryTags.length; // Se tanto as arrays de tecnologia quanto as de categoria tiverem tags, retorna o item
    });
  } //Initial filtering


  filterProjects();
  /** Event listeners */
  //On filter change

  $(".grid-filter").click(function (e) {
    $(e.target).attr("checked", true);
    filterProjects();
  }); //Reset filters

  $(".reset-link").click(function (e) {
    e.preventDefault();
    var resetType = $(e.target).parent().attr("class");

    if (resetType.includes("tecnologia")) {
      $(".filter-group--tecnologia .grid-filter").removeAttr("checked");
    } else if (resetType.includes("categoria")) {
      $(".filter-group--categoria .grid-filter").removeAttr("checked");
    }

    filterProjects();
  }); // Closes responsive menu when user clicks outside of it

  $(document).click(function (e) {
    if ($(".navbar-collapse").hasClass("show") && !$(e.target).hasClass("navbar-collapse") && !$(e.target).parents().hasClass("navbar-collapse")) {
      $("#navbarSupportedContent").collapse("hide");
    }
  });
  $("#navbarSupportedContent").on("show.bs.collapse", function () {
    $(".hamburger").addClass("is-active");
  });
  $("#navbarSupportedContent").on("hide.bs.collapse", function () {
    $(".hamburger").removeClass("is-active");
  });
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
})(jQuery);
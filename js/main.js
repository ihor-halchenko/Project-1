"use strict";

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $(".header-nav").addClass(" sticky-menu ");
    } else {
      $(".header-nav").removeClass(" sticky-menu ");
    }
  });
});

$(document).ready(function () {
  $(".works-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    speed: 1200,
  });
  $(".team-slider").slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

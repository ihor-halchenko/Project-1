"use strict";

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
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

function initMap() {
  var uluru = { lat: 49.0666684, lng: 33.3984375 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 49.06269, lng: 33.408353 },
//     zoom: 10,
//   });
// }

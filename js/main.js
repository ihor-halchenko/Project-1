"use strict";

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 620) {
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
  let pos = { lat: 49.0666684, lng: 33.3984375 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: pos,
  });

  let image = "img/contact-map_icon.png";
  let marker = new google.maps.Marker({
    position: pos,
    map: map,
    draggable: true,
    animation: google.maps.Animation.BOUNCE,
    icon: image,
  });
}

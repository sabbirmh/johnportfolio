$(function () {

  'use strict';

  // Cart Hover vanilla Js Start ======== == == == == == == == ===

  VanillaTilt.init(document.querySelector(".card"), {
    max: 15,
    speed: 300
  });
  VanillaTilt.init(document.querySelector(".card_two"), {
    max: 15,
    speed: 300
  });
  VanillaTilt.init(document.querySelector(".card_three"), {
    max: 15,
    speed: 300
  });
  VanillaTilt.init(document.querySelector(".card_four"), {
    max: 15,
    speed: 300
  });
  VanillaTilt.init(document.querySelector(".card_five"), {
    max: 15,
    speed: 300
  });
  VanillaTilt.init(document.querySelector(".card_six"), {
    max: 15,
    speed: 300
  });
  // Cart Hover vanilla Js End ======== == == == == == == == ===

  // filter Js Start ======== == == == == == == == ===

  var containerEl = document.querySelector('.filter_img');
  var mixer = mixitup(containerEl);
  // filter Js End ======== == == == == == == == ===


  // Menu Fixed Js Start ======== == == == == == == == ===

  var navoff = $('.menu_main').offset().top;

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
      $('.menu_main').addClass('menu_fix');
    } else {
      $('.menu_main').removeClass('menu_fix');
    }
  });
  // Menu Fixed Js End ======== == == == == == == == ===

  // tesimonial Js Start ======== == == == == == == == ===

  var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(
      document.getElementById("testim-dots").children
    ),
    testimContent = Array.prototype.slice.call(
      document.getElementById("testim-content").children
    ),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
  window.onload = function () {
    // Testim Script
    function playSlide(slide) {
      for (var k = 0; k < testimDots.length; k++) {
        testimContent[k].classList.remove("active");
        testimContent[k].classList.remove("inactive");
        testimDots[k].classList.remove("active");
      }

      if (slide < 0) {
        slide = currentSlide = testimContent.length - 1;
      }

      if (slide > testimContent.length - 1) {
        slide = currentSlide = 0;
      }

      if (currentActive != currentSlide) {
        testimContent[currentActive].classList.add("inactive");
      }
      testimContent[slide].classList.add("active");
      testimDots[slide].classList.add("active");

      currentActive = currentSlide;

      clearTimeout(testimTimer);
      testimTimer = setTimeout(function () {
        playSlide((currentSlide += 1));
      }, testimSpeed);
    }

    testimLeftArrow.addEventListener("click", function () {
      playSlide((currentSlide -= 1));
    });

    testimRightArrow.addEventListener("click", function () {
      playSlide((currentSlide += 1));
    });

    for (var l = 0; l < testimDots.length; l++) {
      testimDots[l].addEventListener("click", function () {
        playSlide((currentSlide = testimDots.indexOf(this)));
      });
    }
    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
      switch (e.keyCode) {
        case 37:
          testimLeftArrow.click();
          break;

        case 39:
          testimRightArrow.click();
          break;

        case 39:
          testimRightArrow.click();
          break;

        default:
          break;
      }
    });

    testim.addEventListener("touchstart", function (e) {
      touchStartPos = e.changedTouches[0].clientX;
    });

    testim.addEventListener("touchend", function (e) {
      touchEndPos = e.changedTouches[0].clientX;

      touchPosDiff = touchStartPos - touchEndPos;

      console.log(touchPosDiff);
      console.log(touchStartPos);
      console.log(touchEndPos);

      if (touchPosDiff > 0 + ignoreTouch) {
        testimLeftArrow.click();
      } else if (touchPosDiff < 0 - ignoreTouch) {
        testimRightArrow.click();
      } else {
        return;
      }
    });
  };
  // tesimonial Js End ======== == == == == == == == ===

  // Back to Top button Js Start ======== == == == == == == == ===

  (function () {
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();
  // Back to Top button Js End ======== == == == == == == == ===

  // venobox Js Start ======== == == 

  $('.venobox').venobox();
  // venobox Js End ======== == == 

  // Image hover Js Start ======== == == == 

  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  // Image hover Js End ======== == == == 
});
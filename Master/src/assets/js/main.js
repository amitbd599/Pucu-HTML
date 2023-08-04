/***************************************************
==================== JS INDEX ======================
****************************************************


01. Hero Slider One
02. Team Slider One
03. service Slider One
04. Counter Js
05. Testimonial Slider One
06. Testimonial Slider two
07. magnificPopup video view
08. Sticky Header-1 Js
09. Sticky Header-2 Js
10. Sidebar Js
11. PreLoader Js
12. Mobile Menu Js
13. Body overlay Js
14. Wow Js
15. Sidebar Js
16. Data CSS Js

****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);

  //! 04. Counter Js
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  //! 10. Sidebar Js
  $(".sidebar-open").on("click", function () {
    $(".sidebar").addClass("left-0");
  });

  $(".sidebar-close").on("click", function () {
    $(".sidebar").removeClass("left-0");
  });

  //! 11. PreLoader Js
  windowOn.on("load", function () {
    $(".InitLoader").fadeOut(1000);
  });

  //! 13. Body overlay Js
  $(".body-overlay").on("click", function () {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  //! 14. Wow Js
  new WOW().init();

  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });
})(jQuery);

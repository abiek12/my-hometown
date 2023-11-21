$(document).ready(function () {
  $("#readMore").click(function () {
    const extraContent = $("#readMore");
    if (extraContent.hasClass("show")) {
      $("#readMore").text("Read More");
    } else {
      extraContent.collapse("show");
      $("#readMore").text("Read Less");
    }
  });

  $(window).scroll(function () {
    scrollFunction();
  });
  function scrollFunction() {
    if ($(document).scrollTop() > 80) {
      $("#scrollToTop").css("display", "block");
    } else {
      $("#scrollToTop").css("display", "none");
    }
  }

  $("#scrollToTop").click(function () {
    document.documentElement.scrollTop = 0;
  });
});

$(".grid-box").masonry({
  itemSelector: ".col-md-4",
});

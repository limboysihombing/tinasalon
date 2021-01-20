// Galery Hover 
$(document).ready(function () {
  let item = $(".galery_item")
  $(".galery-item").each(function (i, v) {
    $(this).children().hide()

    $(v).hover(function () {
      $(this).children().fadeIn(200)
    }, function () {
      $(this).children().fadeOut(100)
    });
  })

});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
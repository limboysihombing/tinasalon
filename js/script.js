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


$(function () {
  $(".galery-item").click(function () {
    $('#modal').children().empty()
    $('#modal').append(modalContent)
    let imgUrl = $(this).css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
    let modalImg = `<img src="` + imgUrl + `" class="img-fluid" alt="Responsive image">`
    $("#modal_img").append(modalImg)

    let modalTitle = $(this).find('h4')[0].innerText
    $('#modal').find("#modal_title").append(modalTitle)

    $('#modal').modal('show')
  })
});
let modalContent = `
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal_title"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body p-0" id="modal_img">
      </div>
    </div>
  </div>
`


$('#tasks').on('show.bs.collapse', function () {
  $('.card-body a').removeClass('mt-auto');
})

$('#tasks').on('hide.bs.collapse', function () {
    $('.card-body a').addClass('mt-auto');
})

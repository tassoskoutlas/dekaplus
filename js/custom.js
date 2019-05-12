$('#tasks').on('show.bs.collapse', function () {
  $('.card-body a').removeClass('mt-auto');
})

$('#tasks').on('hide.bs.collapse', function () {
    $('.card-body a').addClass('mt-auto');
})

function share() {
  FB.ui({
    method: 'share',
    href: 'https://dekaplus.info'
  }, function(response){});
}

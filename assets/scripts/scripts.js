$('.card-toggle').on('click', function(){
  var $toggle = $(this);
  var isAnimating = false;

  $('.card-toggle').removeClass('active');
  $toggle.addClass('active');

  if (!isAnimating) {
    isAnimating = true;

    $('.card').removeClass('active');

    setTimeout(function(){
      $toggle.parent().toggleClass('active').find('.card-content').on('transitionend', function(){
        isAnimating = false;
      });
    }, 10);
  }
  else {
    return;
  }
});

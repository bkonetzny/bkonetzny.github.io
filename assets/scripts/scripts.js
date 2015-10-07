$(document).ready(function(){
  var showCard = function(card){
    var isAnimating = false;
    var $card = $('#' + card);

    $('.card-toggle').removeClass('active');
    $card.find('.card-toggle').addClass('active');

    if (!isAnimating) {
      isAnimating = true;

      $('.card').removeClass('active');

      // track card cchange as pageview
      if (window.ga) {
        window.ga('send', 'pageview', '/' + window.location.hash);
      }

      setTimeout(function(){
        $card.toggleClass('active').find('.card-content').on('transitionend', function(){
          isAnimating = false;
        });
      }, 10);
    }
    else {
      return;
    }
  };

  var parseHash = function(hash){
    var card = hash.split('/').pop() || 'overview';
    showCard(card);
  };

  parseHash(window.location.hash);

  $(window).bind('hashchange', function() {
    parseHash(window.location.hash);
  });
});

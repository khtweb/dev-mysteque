window.addEventListener('load', loadFinished);
function loadFinished(){
    $('body').addClass('loaded');

    /* window.setTimeout(dispMsg, 2500);
    function dispMsg(){
      $('body').addClass('loaded');
    } */
}


(function($) {
  $(function() {
      // Nav Fixed
      $(window).scroll(function() {
          if ($(window).scrollTop() > 0) {
              $('body').addClass('scrl');
          } else {
              $('body').removeClass('scrl');
          }
      });
  });
})(jQuery);



function anchor() {
    $('a[href^="#"]').click(function () {
      var Hash = $(this.hash),
        $Hash = $(Hash);
      if ($Hash.length > 0) {
        var HashOffset = $Hash.offset().top;
        $('html,body').animate({
          scrollTop: HashOffset
        }, 600);
      }
      return false;
    });
}

$(function(){
	anchor();
});

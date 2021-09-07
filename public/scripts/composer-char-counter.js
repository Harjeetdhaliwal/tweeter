$(document).ready(function() {

  $('#tweet-text').on('keyup', function(event) {
    const $maxLength = 140;
    const $textLength = this.textLength;
    const $counterValue = $maxLength-$textLength
    const $counter = $(this).closest('form').find('.counter');
    $counter.val($counterValue);
    if ($counterValue < 0) {
      $counter.addClass('counter-red');
    }

    if ($counterValue >= 0) {
      $counter.removeClass('counter-red');
    }
  })
});


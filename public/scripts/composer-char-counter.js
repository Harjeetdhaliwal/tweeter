
//Function to check if tweet-text exceeds 140 characters
const totalCharacters = function($counterValue) {
  if ($counterValue >= 0) {
    return true;
  }
  return false;
}

//Event handler to calculate characters entered by user in the textarea
const characterCounter = function(event) {
  const $maxLength = 140;
  const $textLength = this.textLength;
  const $counterValue = $maxLength-$textLength
  const $counter = $(this).closest('form').find('.counter');
  $counter.val($counterValue);
  if (!totalCharacters($counterValue)) {
    $counter.addClass('counter-red');
    return;
  }
  $counter.removeClass('counter-red');
}


//Load when document is ready
$(document).ready(function() {

  //Event Listener when user enters the input 
  $('#tweet-text').on('input', characterCounter);
});


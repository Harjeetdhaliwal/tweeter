/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//takes in an array of tweet objects and append each one to #tweets-container
const renderTweeets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};

//returns tweet <article> element containing the entire HTML structure of the tweet
const createTweetElement = function(tweetData) {

  const {user, content, created_at} = tweetData;

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }; 

  const $tweet = `<article class='tweet'>
  <header>
    <div class='user-info'>
      <img src="${user.avatars}">
      <p>${user.name}</p>
    </div>
    <p class='username'>${user.handle}</p>
  </header>
  <body>
    <p class="tweet-display">${escape(content.text)}</p>
  </body>
  <footer>
    <p>${timeago.format(created_at)}</p>
    <div class='tweet-icons'>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
  </article>`;

  return $tweet;
};

$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    if ($(this).find('.counter').val() < 0) {
      alert('Tweet too Long!!');
      return;
    } else if(!$(this).find('#tweet-text').val()) {
      alert("Please enter the tweet");
      return;
    } 
    const data = $(this).serialize();
    $.post('/tweets', data)
    .then(function() {
      $('#tweets-container').empty();
      loadTweets();
      $('form').find('#tweet-text').val('');
      $('form').find('.counter').val(140);
    });
  });

  //Fetching tweets with AJAX GET request
  const loadTweets = function() {
    $.ajax('/tweets', {method: 'GET'})
    .then(function(tweetsData) {
      renderTweeets(tweetsData);
    });
  };

  loadTweets();
});
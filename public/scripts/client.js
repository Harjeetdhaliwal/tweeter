/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//takes in an array of tweet objects and append each one to #tweets-container
const renderTweeets = function(tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
};

//returns tweet <article> element containing the entire HTML structure of the tweet
const createTweetElement = function(tweetData) {
  const $tweet = $(`<article class='tweet'>
  <header>
  <div class='user-info'>
  <img src="${tweetData.user.avatars}">
  <p>${tweetData.user.name}</p>
  </div>
  <p class='username'>${tweetData.user.handle}</p>
  </header>
  <p class="tweet-display">${tweetData.content.text}</p>
  <footer>
  <p>${timeago.format(tweetData.created_at)}</p>
  <div class='tweet-icons'>
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </div>
  </footer>
  </article>`);

  return $tweet;
};


$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.post('/tweets', data);
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
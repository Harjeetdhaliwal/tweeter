/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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

  renderTweeets(data);
});
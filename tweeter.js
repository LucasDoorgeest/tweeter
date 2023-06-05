
// TODO: argument tweet object 
function createTweet(tweet) {
    const tweetsSection = document.getElementById('tweets');

    const templateElement = document.getElementById('tweet-template');
    const tweetArticle = templateElement.content.cloneNode(true);

    tweetArticle.querySelector('.displayName').innerHTML = tweet.displayName;
    tweetArticle.querySelector('.userName').innerHTML = tweet.userName;
    tweetArticle.querySelector('.timeAgo').innerHTML = tweet.timeAgo;
    tweetArticle.querySelector('.content').innerHTML = tweet.content;
    tweetArticle.querySelector('.image').src = tweet.image;

    tweetsSection.appendChild(tweetArticle);
}

function parseTweets(tweets) {
    for (let index = 0; index < tweets.length; index++) {
        const tweet = tweets[index];
        createTweet(tweet);
    }
}

const testTweet = {
    displayName: "John",
    userName: "@JohnWest",
    timeAgo: "15h",
    content: "Test Tweet!",
    image: "https://picsum.photos/200/300"
};

// createTweet(testTweet);

// TODO: On Load uitvoeren!
function setup() {
    fetch("./tweets.json")
        .then((response) => response.json())
        .then(parseTweets);
}

window.addEventListener('load', setup);
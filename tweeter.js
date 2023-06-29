class Tweet {
    constructor(data) {
        this.displayName = data.displayName;
        this.userName = data.userName;
        this.content = data.content;
        this.image = data.image;
    }

    html() {
        const tweetsSection = document.getElementById('tweets');

        /** @type {HTMLTemplateElement} */
        const templateElement = document.getElementById('tweet-template');
        /** @type {HTMLElement} */
        const tweetArticle = templateElement.content.cloneNode(true);

        tweetArticle.querySelector('.displayName').innerHTML = this.displayName;
        tweetArticle.querySelector('.userName').innerHTML = this.userName;
        tweetArticle.querySelector('.content').innerHTML = this.content;
        tweetArticle.querySelector('.image').src = this.image;

        tweetsSection.appendChild(tweetArticle);
    }
}

class TweetList {
    constructor() {
        fetch("./tweets2.json")
        .then((response) => response.json())
        .then((data) => this.parse(data));
    }

    parse(data) {
        document.getElementById('tweets').innerHTML = "";
        this.tweets = data.map((data) => new Tweet(data));
        this.tweets.forEach((tweet) => tweet.html());
    }
}

const tweetList = new TweetList();
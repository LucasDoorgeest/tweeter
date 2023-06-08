class Tweet {
    constructor(data) {
        this.displayName = data.displayName;
        this.userName = data.userName;
        this.postedAt = data.postedAt;
        this.content = data.content;
        this.image = data.image;
    }

    timeAgo() {
        const now = Date.now();
        const date = new Date(this.postedAt);
        
        const msAgo = now - date;
        const minutesAgo = Math.round(msAgo / 1000 / 60);
        
        if(minutesAgo < 60) {
            return `${minutesAgo}m`;
        }

        const hoursAgo = Math.round(minutesAgo / 60);
        if(hoursAgo < 24) {
            return `${hoursAgo}h`;
        }

        const daysAgo = Math.round(hoursAgo / 24);
        return `${daysAgo}d`;
    }

    html() {
        const tweetsSection = document.getElementById('tweets');

        /** @type {HTMLTemplateElement} */
        const templateElement = document.getElementById('tweet-template');
        /** @type {HTMLElement} */
        const tweetArticle = templateElement.content.cloneNode(true);

        tweetArticle.querySelector('.displayName').innerHTML = this.displayName;
        tweetArticle.querySelector('.userName').innerHTML = this.userName;
        tweetArticle.querySelector('.timeAgo').innerHTML = this.timeAgo();
        tweetArticle.querySelector('.content').innerHTML = this.content;
        tweetArticle.querySelector('.image').src = this.image;

        tweetsSection.appendChild(tweetArticle);
    }
}

class TweetList {
    constructor() {
        fetch("./tweets.json")
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
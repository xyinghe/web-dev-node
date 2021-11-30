// let tweets = require('../data/tweets.json');
const dao = require('../data/db/tweets/tweets-dao');
const tweets = require("../data/tweets.json")

module.exports = (app) => {

    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const postNewTweet = (req, res) => {
        const newTweet = {
            // _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "Xueying He",
            "verified": false,
            "handle": "xyinghe",
            "time": "2h",
            "avatar-image": "../../../images/coco.jpg",
            "logo-image": "../../../images/coco.jpg",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        dao.createTweet(newTweet)
            .then((insertTweet)) =>res.json(insertTweet));
    }

    // app.post('/api/tweets', postNewTweet);

    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
            .then((status) =>res.send(status));
    }
    // app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }


    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);

};

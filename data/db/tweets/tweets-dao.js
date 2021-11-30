const model = require('../tweets/tweets-model');

const findAllTweets = () =>
    model.find();
const createTweet = (tweet) =>
    model.create(tweet);
const deleteTweet = (id) =>
    model.deleteOne({_id:id});
const findTweetById = (id) =>
    model.findById(id);
const updateTweet = (id, tweet) =>
    model.updateOne({_id: id}, {$set: tweet});

module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet
};



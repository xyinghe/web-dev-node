const model = require('../profiles/profile-model');

const getProfile = () =>
    model.findOne();
const updateProfile = (id, profile)=> {
    let newProfile = model.updateOne({_id: id}, {$set: profile});
    return newProfile
}

module.exports = {
    getProfile, updateProfile
};
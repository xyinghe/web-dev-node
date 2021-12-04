const model = require('../profiles/profile-model');

const getProfile = () =>
    model.findOne();
const updateProfile = (id, profile)=> {
    let newProfile = model.updateOne({_id: id}, {$set: profile});
    return newProfile
}
const  findProfileById =(id) =>
    model.findById(id)

module.exports = {
    getProfile, updateProfile,
    findProfileById
};
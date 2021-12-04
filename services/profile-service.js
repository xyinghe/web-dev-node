// let profile = require('../data/profile.json');
const dao = require('../data/db/profiles/profile-dao');
const profile = require("../data/profile.json")
const {updateProfile} = require("../data/db/profiles/profile-dao");

module.exports = (app) => {

    const getCurrentProfile = (req, res) =>{
        dao.findProfileById()
            .then(profile => res.json(profile))
    }
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) =>{
        // profile = req.body;
        // // res.sendStatus(200);
        // res.json(profile);

        const id = req.params.id;
        dao.updateProfile(id,profile)
            .then(newProfile =>{
                return res.json(newProfile)
            })
    }
    app.put('/api/profile/:id',updateCurrentProfile);



};

let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) =>{
        res.json(profile)
    }
    app.get('/api/profile', getCurrentProfile)

    const updateCurrentProfile = (req, res) =>{
        profile = req.body;
        // res.sendStatus(200);
        res.json(profile);
    }
    app.put('/api/profile',updateCurrentProfile)



};

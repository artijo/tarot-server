const userModel = require('../Models/User');

function LoginwithGoogle(req, res) {
    userModel.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            res.json(user);
        } else {
            const newUser = new userModel({
                email: req.body.email,
                name: req.body.name,
                tel: req.body.tel,
            });
            newUser.save().then((user) => {
                res.json(user);
            });
        }
    });
}

module.exports ={LoginwithGoogle} ;
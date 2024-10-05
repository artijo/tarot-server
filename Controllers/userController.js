const userModel = require('../Models/User');

function LoginwithGoogle(req, res) {
    console.log(req.body);
    userModel.findOne({ email: req.body.email }).then((user) => {
        let userRole = 'user'
        if (req.body.email == "pheeraphon.j@kkumail.com") {
            userRole = 'admin';
        }
        if (user) {
            res.json(user);
        } else {
            const newUser = new userModel({
                email: req.body.email,
                name: req.body.name,
                tel: req.body.tel,
                role: userRole,
            });
            newUser.save().then((user) => {
                res.json(user);
            }); 
        }
    });
}

function getUser(req, res) {
    console.log(req.body);
    userModel.find({ email: req.body.email })
        .then((user) => 
            res.json(user))
}

module.exports ={LoginwithGoogle,getUser} ;
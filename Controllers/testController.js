const userSchema = require('../Models/User');

function TestController(req, res) {
    res.send('Hello Test!');
}
function InsertUser(req, res) {
    const newUser = new userSchema({
        username: "test",
        password: "test",
        email: "t@test.com",
        name: "test",
        birthdate: new Date(),
        tel: "123456789"
    });
    newUser.save().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    });
}

function getAllUsers(req, res) {
    userSchema.find().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.send(error);
    }
    );
}

module.exports = { TestController, InsertUser, getAllUsers };
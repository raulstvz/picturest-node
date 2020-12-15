const mongoose = require('mongoose');

// Define model schema
const userModelSchema = mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    avatar: String,
    password: String,
    username: String,
    followers: [],
    boards: []
});

// Compile model from schema
const UserModel = mongoose.model('UserModel', userModelSchema);

const create = (user) => {
    UserModel.create(user, function (err, user) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('The user has been created as: ', user);
        }
    });
};


const get = async (id) => {
    return await UserModel
        .findOne({ "id": parseInt(id) })
        .exec(function (err, user) {
            if (err) {
                console.log(err);
            } else {
                console.log('The user is: ', user);
            }
        });
};

const all = async () => {
    return await UserModel
        .find({})
        .exec(function (err, users) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(users);
            }
        });
};

const remove = (id) => {
    return UserModel
        .deleteOne({ "id": parseInt(id) })
        .exec(function (err, user) {
            if (err) {
                return console.log(err);
            } else {
                console.log('The user %s has been deleted', user);
            }
        });
};

const update = (id, updateduser) => {
    return UserModel
        .updateOne({ "id": parseInt(id) }, updateduser)
        .exec(function (err, updateduser) {
            if (err) {
                return console.log(err);
            } else {
                console.log('The user %s has been updated', updateduser);
            }
        });
};

module.exports = {
    create,
    get,
    all,
    remove,
    update
};
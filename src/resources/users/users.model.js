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

const getOne = (id) => {
    return UserModel
        .findOne({ "id": parseInt(id) })
        .exec(function (err, user) {
            if (err) return console.log(err);
            console.log('The user is %s', user);
            return user;
        });
};

const getAll = () => {
    return UserModel
        .find({})
        .exec(function (err, users) {
            if (err) return console.log(err);
            console.log(users);
            return users;
        });
};

const createOne = (user) => {
    UserModel.create(user, function (err, instance) {
        if (err) return handleError(err);
        if (instance) {
            //console.log(instance.name);
            console.log('The user %s has been created', instance.name);
        }
    });
};


const updateOne = (id, updateduser) => {
    return UserModel
        .updateOne({ "id": parseInt(id) }, updateduser)
        .exec(function (err, updateduser) {
            if (err) return console.log(err);
            console.log('The user %s has been updated', updateduser);
            return user;
        });
};


const deleteOne = (id) => {
    return UserModel
        .findOne({ "id": parseInt(id) })
        .exec(function (err, user) {
            if (err) return console.log(err);
            console.log('The user %s has been deleted', user);
            return user;
        });
};

module.exports = {
    getOne,
    getAll,
    createOne,
    updateOne,
    deleteOne
};
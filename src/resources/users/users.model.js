const mongoose = require('mongoose');

// Define model schema
const UserSchema = mongoose.Schema({
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
const UserModel = mongoose.model('UserModel', UserSchema);

//create
const create = (user) => {
    UserModel.create(user, function (err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Created Docs : ', docs);
        }
    });
};

//get (get one)
const get = async (id) => {
    let query = { _id: id };
    return await UserModel.findOne(query)
};

//get (get all)
const all = async () => {
    return await UserModel.find()
};

//get (get by email)
const getByEmail = async (email) => {
    let query = {email: email}
    return await UserModel.findOne(query)
};

//update
const update = (id, updateduser) => {
    let query = { _id: id };
    UserModel.updateOne(query, updateduser, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('Updated Docs : ', docs);
        }
    });
};

//remove
const remove = (id) => {
    let query = { _id: id };
    UserModel.deleteOne(query, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('Deleted Docs : ', docs);
        }
    });
};



module.exports = {
    create,
    get,
    all,
    getByEmail,
    update,
    remove
};
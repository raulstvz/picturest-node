const mongoose = require('mongoose');

// Define model schema
const pinModelSchema = mongoose.Schema({
    title: String,
    description: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BoardModel',
    },
    source: String,
    comments: []
});

// Compile model from schema
const PinModel = mongoose.model('PinModel', pinModelSchema);

//create
const create = (pin) => {
    PinModel.create(pin, function (err, docs) {
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
    return await PinModel.findOne(query).populate('author')//.populate('author', 'board');
};

//get (get all)
const all = async () => {
    return await PinModel.find()
};

//update
const update = (id, updatedpin) => {
    let query = { _id: id };
    PinModel.updateOne(query, updatedpin, function (err, docs) {
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
    PinModel.deleteOne(query, function (err, docs) {
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
    update,
    remove
};
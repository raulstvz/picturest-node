const mongoose = require('mongoose');

// Define model schema
const pinModelSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    author: String,
    board: String,
    source: String,
    comments: []
});

// Compile model from schema
const PinModel = mongoose.model('PinModel', pinModelSchema);

const create = (pin) => {
    PinModel.create(pin, function (err, pin) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('The pin has been created as: ', pin);
        }
    });
};

const get = async (id) => {
    return await PinModel
        .findOne({ "id": parseInt(id) })
        .exec(function (err, pin) {
            if (err) {
                console.log(err);
            } else {
                console.log('The pin is: ', pin);
            }
        });
};

const all = async () => {
    return await PinModel
        .find({})
        .exec(function (err, pins) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(pins);
            }
        });
};

const remove = (id) => {
    return PinModel
        .deleteOne({ "id": parseInt(id) })
        .exec(function (err, pin) {
            if (err) {
                return console.log(err);
            } else {
                console.log('The pin %s has been deleted', pin);
            }
        });
};

const update = (id, updatedpin) => {
    return PinModel
        .updateOne({ "id": parseInt(id) }, updatedpin)
        .exec(function (err, updatedpin) {
            if (err) {
                return console.log(err);
            } else {
                console.log('The user %s has been updated', updatedpin);
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
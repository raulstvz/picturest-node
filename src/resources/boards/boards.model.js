const mongoose = require('mongoose');

// Define model schema
const boardModelSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
    },
    title: String,
    description: String,
    collaborators: [],
    pins: []
});

// Compile model from schema
const BoardModel = mongoose.model('BoardModel', boardModelSchema);

//create
const create = (board) => {
    BoardModel.create(board, function (err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log('Created Docs : ', docs);
        }
    });
};

//get (one)
const get = async (id) => {
    let query = { _id: id };
    return await BoardModel.findOne(query).populate('author');
};

//all (all)
const all = async () => {
    return await BoardModel.find()
};

//get (by user)
const getByUser = async (userId) => {
    let query = { author: userId }
    return await BoardModel.find(query)
}

//update
const update = (id, updatedboard) => {
    let query = { _id: id };
    BoardModel.updateOne(query, updatedboard, function (err, docs) {
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
    BoardModel.deleteOne(query, function (err, docs) {
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
    getByUser,
    remove
};

const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({ //Define the data type of the mongo database
    title: {
        type: String,
        required: true,
        unique: true
    },
    describe: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, {
  timestamps: true
})

const PolicyModel = mongoose.model("policy", PolicySchema)

module.exports = PolicyModel;

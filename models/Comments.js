const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const CommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
 
module.exports = Comment = mongoose.model('comment', CommentSchema);

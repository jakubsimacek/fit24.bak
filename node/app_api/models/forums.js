var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    author: {type: String, required: true},
    created: {type: Date, required: true, "default": Date.now},
    text: {type: String, required: true}
});

var forumSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    owner: {type: String, required: true},
    created: {type: Date, required: true, "default": Date.now},
    admins: [String],
    writers: [String],
    readers: [String]
});

mongoose.model('Forum', forumSchema);

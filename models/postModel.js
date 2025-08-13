const mongoose = require("mongoose");

// Post Schema Definition
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment" // This line is crucial
    }]
});

// Export the model
module.exports = mongoose.model("Post", postSchema);
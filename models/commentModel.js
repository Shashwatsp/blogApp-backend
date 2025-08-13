const mongoose = require("mongoose");

// Comment Schema Definition
const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // Reference to the Post model
    },
    user: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
});

// Export the model
module.exports = mongoose.model("Comment", commentSchema);
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;

        // Create a new comment object
        const comment = new Comment({
            post,
            user,
            body
        });

        // Save the new comment to the database
        const savedComment = await comment.save();

        // Find the related post and add the new comment's ID to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post, // The ID of the post to update
            { $push: { comments: savedComment._id } }, // Push the new comment's ID
            { new: true } // Return the updated document
        )
        .populate("comments") // Populate the comments array with actual comment documents
        .exec();

        // Check if the post was found
        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        res.status(200).json({
            success: true,
            post: updatedPost,
        });

    } catch (error) {
        
        return res.status(500).json({ 
            error: "Error while creating comment",
            
        });
    }
};
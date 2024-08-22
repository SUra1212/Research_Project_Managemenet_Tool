const express = require('express');
const evaluateTopics = require('../../models/evaluateTopics');

const router = express.Router();

//save posts- save the topic evaluation details into the database
router.post('/evaluateTopics/save', (req, res) => {

    let newPost = new evaluateTopics(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
//if the data was successfully added it gives the message
        return res.status(200).json({
            success: "Data Saved Successfully"
        });
    });
});


//get posts - to get all the topic evaluation details from the database
router.get('/evaluateTopics', (req, res) => {
    evaluateTopics.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    });
});


//get a specific post - to get a specific topic evaluation details by using id
router.get("/evaluateTopics/:id", (req, res) => {

    let postId = req.params.id;

    evaluateTopics.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            post
        });

    });

});


//update posts - to update the specific topic evaluation details
router.put('/evaluateTopics/update/:id', (req, res) => {
    evaluateTopics.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });

            }
            //after updating successfully it gives message
            return res.status(200).json({
                success: "Updated Succesfully"
            });
        }
    );
});


//delete post - to delete a specific topic evaluation details
router.delete('/evaluateTopics/delete/:id', (req, res) => {
    evaluateTopics.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
        if (err) return res.status(400).json({
            message: "Delete Unsuccesfull", err
        });
        //after delteing successfully it gives message
        return res.json({
            message: "Delete Successfull", deletedpost
        });
    });
});

module.exports = router;

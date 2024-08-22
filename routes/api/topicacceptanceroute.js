const express = require('express');
const TopicAcceptance = require('../../models/topicacceptancemodel');

const router = express.Router();

//save posts

router.post('/topicacceptance/save', (req, res) => {

    let newPost = new TopicAcceptance(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }

        return res.status(200).json({
            success: "Data Saved Successfully"
        });
    });
});


//get posts
router.get('/topicacceptance', (req, res) => {
    TopicAcceptance.find().exec((err, posts) => {
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


//get a specific post
router.get("/topicacceptance/:id", (req, res) => {

    let postId = req.params.id;

    TopicAcceptance.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            post
        });

    });

});


//update posts
router.put('/topicacceptance/update/:id', (req, res) => {
    TopicAcceptance.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });

            }
            return res.status(200).json({
                success: "Updated Succesfully"
            });
        }
    );
});


//delete post
router.delete('/topicacceptance/delete/:id', (req, res) => {
    TopicAcceptance.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
        if (err) return res.status(400).json({
            message: "Delete Unsuccesfull", err
        });
        return res.json({
            message: "Delete Successfull", deletedpost
        });
    });
});

module.exports = router;

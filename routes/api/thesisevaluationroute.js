const express = require('express');
const ThesisEvaluation = require('../../models/thesisevaluationmodel');

const router = express.Router();

//save posts

router.post('/thesisevaluation/save', (req, res) => {

    let newPost = new ThesisEvaluation(req.body);

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
router.get('/thesisevaluation', (req, res) => {
    ThesisEvaluation.find().exec((err, posts) => {
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
router.get("/thesisevaluation/:id", (req, res) => {

    let postId = req.params.id;

    ThesisEvaluation.findById(postId, (err, post) => {
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
router.put('/thesisevaluation/update/:id', (req, res) => {
    ThesisEvaluation.findByIdAndUpdate(
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
router.delete('/thesisevaluation/delete/:id', (req, res) => {
    ThesisEvaluation.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
        if (err) return res.status(400).json({
            message: "Delete Unsuccesfull", err
        });
        return res.json({
            message: "Delete Successfull", deletedpost
        });
    });
});

module.exports = router;

const express = require('express');
const presentationMarks = require('../../models/presentationMarks');

const router = express.Router();

//save posts- save the presentation marks details into the database
router.post('/presentationMarks/save', (req, res) => {

    let newPost = new presentationMarks(req.body);

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


//get posts - to get all the presentation marks details from the database
router.get('/presentationMarks', (req, res) => {
    presentationMarks.find().exec((err, posts) => {
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


//get a specific post - to get a specific presentation mark details by using id
router.get("/presentationMarks/:id", (req, res) => {

    let postId = req.params.id;

    presentationMarks.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            post
        });

    });

});


//update posts - to update the specific presentaion mark details
router.put('/presentationMarks/update/:id', (req, res) => {
    presentationMarks.findByIdAndUpdate(
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


//delete post - to delete a specific presentation mark details
router.delete('/presentationMarks/delete/:id', (req, res) => {
    presentationMarks.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
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

const express = require('express');
const makePanels = require('../../models/panelMembersToPanels');

const router = express.Router();

//save posts- save the panels make details into the database
router.post('/makePanels/save', (req, res) => {

    let newPost = new makePanels(req.body);

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


//get posts - to get all the panels make details from the database
router.get('/makePanels', (req, res) => {
    makePanels.find().exec((err, posts) => {
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


//get a specific post - to get a specific panel details by using id
router.get("/makePanels/:id", (req, res) => {

    let postId = req.params.id;

    makePanels.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            post
        });

    });

});


//update posts - to update the specific panel details
router.put('/makePanels/update/:id', (req, res) => {
    makePanels.findByIdAndUpdate(
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


//delete post - to delete a specific panel details
router.delete('/makePanels/delete/:id', (req, res) => {
    makePanels.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
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

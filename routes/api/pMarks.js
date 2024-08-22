const express = require('express');
const pMarks = require('../../models/pMarks');

const router = express.Router();

//save posts- save the presentation marks details into the database
router.post('/pMarks/save', (req, res) => {

    let newPost = new pMarks(req.body);

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
router.get('/pMarks', (req, res) => {
    pMarks.find().exec((err, posts) => {
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
router.get("/pMarks/:id", (req, res) => {

    let postId = req.params.id;

    pMarks.findById(postId, (err, post) => {
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
router.put('/pMarks/update/:id', (req, res) => {
    pMarks.findByIdAndUpdate(
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


//delete post - to delete a specific p mark details
router.delete('/pMarks/delete/:id', (req, res) => {
    pMarks.findByIdAndRemove(req.params.id).exec((err, deletedpost) => {
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

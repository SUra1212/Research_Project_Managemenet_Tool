const express = require('express');
const Allocate = require('../../models/AllocatePanel');

const router = express.Router();

//save posts

router.post('/allocate/save',(req,res)=>{

    let newPost = new Allocate(req.body);   

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err 
            });
        }
 
        return res.status(200).json({
            success:"Data Saved Successfully"
        });
    });
});


//get posts
router.get('/allocate',(req,res) =>{
    Allocate.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});




module.exports = router;

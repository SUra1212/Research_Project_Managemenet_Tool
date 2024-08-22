const express = require('express');
const SupReq = require('../../models/SupervisorReq');

const router = express.Router();

//save posts

router.post('/supreq/save',(req,res)=>{

    let newPost = new SupReq(req.body);   

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err 
            });
        }
 
        return res.status(200).json({
            success:"Request Sent Successfully"
        });
    });
});


//get posts
router.get('/supreq',(req,res) =>{
    SupReq.find().exec((err,posts) =>{
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


//get a specific post
router.get("/supreq/:id",(req,res) =>{

    let postId = req.params.id;
    
    SupReq.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });

    });

});


//update posts
router.put('/supreq/update/:id',(req,res)=>{
    SupReq.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});

            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete post
router.delete('/supreq/delete/:id',(req,res) =>{
    SupReq.findByIdAndRemove(req.params.id).exec((err,deletedpost) =>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });
        return res.json({
            message:"Delete Successfull",deletedpost
        }); 
    });
});

module.exports = router;

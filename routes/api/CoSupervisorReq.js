const express = require('express');
const CoSupReq = require('../../models/CoSupervisorReq');

const router = express.Router();

//save posts

router.post('/cosupreq/save',(req,res)=>{

    let newPost = new CoSupReq(req.body);   

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
router.get('/cosupreq',(req,res) =>{
    CoSupReq.find().exec((err,posts) =>{
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
router.get("/cosupreq/:id",(req,res) =>{

    let postId = req.params.id;
    
    CoSupReq.findById(postId,(err,post) =>{
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
router.put('/cosupreq/update/:id',(req,res)=>{
    CoSupReq.findByIdAndUpdate(
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
router.delete('/cosupreq/delete/:id',(req,res) =>{
    CoSupReq.findByIdAndRemove(req.params.id).exec((err,deletedpost) =>{
        if(err) return res.status(400).json({
            message:"Delete Unsuccesfull",err
        });
        return res.json({
            message:"Delete Successfull",deletedpost
        }); 
    });
});

module.exports = router;

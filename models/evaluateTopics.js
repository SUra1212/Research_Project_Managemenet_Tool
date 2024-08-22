const mongoose = require('mongoose');

const evaluateTopicsSchema = new mongoose.Schema({
    //variables
        Group_ID:{
            type:String,
            requred:true 
        },
        TopicTitle:{
            type:String,
            required:true
        },
        Feedback:{
            type:String,
            required:true
        }
    });
    
    module.exports = mongoose.model('evaluateTopics', evaluateTopicsSchema);
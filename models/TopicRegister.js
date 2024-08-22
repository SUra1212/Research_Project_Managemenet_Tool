const mongoose = require ('mongoose');

const TopicRegSchema = new mongoose.Schema({
    groupID:{
        type:String,
        required:true
    },
    rfield:{
        type:String,
        required:true
    },
    rtopic:{
        type:String,
        required:true
    },
    tdetails:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('TopicReg', TopicRegSchema);
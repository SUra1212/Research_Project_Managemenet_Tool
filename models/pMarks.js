const mongoose = require('mongoose');

const pMarkSchema = new mongoose.Schema({
    //variables
    Student_ID1:{
        type:String,
        required:true
    },
    Student_ID2:{
        type:String,
        required:true
    },
    Student_ID3:{
        type:String,
        required:true
    },
    Student_ID4:{
        type:String,
        required:true
    },
    Student_name1:{
        type:String,
        required:true
    },
    Student_name2:{
        type:String,
        required:true
    },
    Student_name3:{
        type:String,
        required:true
    },
    Student_name4:{
        type:String,
        required:true
    },
        Mark1:{
            type:Number,
            required:true
        },
        Mark2:{
            type:Number,
            required:true
        },
        Mark3:{
            type:Number,
            required:true
        },
        Mark4:{
            type:Number,
            required:true
        }
    });
    
    module.exports = mongoose.model('pMarks', pMarkSchema);
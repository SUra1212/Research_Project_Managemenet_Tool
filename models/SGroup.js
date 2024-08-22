const mongoose = require('mongoose');

const SGroupSchema = new mongoose.Schema({
    sname1:{
        type:String,
        required:true
    },
    sid1:{
        type:String,
        required:true
    },
    semail1:{
        type:String,
        required:true
    },
    sname2:{
        type:String,
        required:true
    },
    sid2:{
        type:String,
        required:true
    },
    semail2:{
        type:String,
        required:true
    },
    sname3:{
        type:String,
        required:true
    },
    sid3:{
        type:String,
        required:true
    },
    semail3:{
        type:String,
        required:true
    },
    sname4:{
        type:String,
        required:true
    },
    sid4:{
        type:String,
        required:true
    },
    semail4:{
        type:String,
        required:true
    },
    AllocateName:{
        type:String,
        required:false
    },
    AllocateEmail:{
        type:String,
        required:false
    }



});

module.exports = mongoose.model('Student', SGroupSchema);

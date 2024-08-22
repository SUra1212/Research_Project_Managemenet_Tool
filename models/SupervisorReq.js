const mongoose = require('mongoose');

const SupRequSchema = new mongoose.Schema({

    sname:{
        type:String,
        required:true
    },
    sid:{
        type:String,
        required:true
    },
    supname:{
        type:String,
        required:true
    },
    supemail:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('SupRequest', SupRequSchema);
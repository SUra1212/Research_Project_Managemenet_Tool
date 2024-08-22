const mongoose = require('mongoose');

const AllocatePSchema = new mongoose.Schema({
    SGNumber:{
        type:String,
        required:true
    },
    SGleader:{
        type:String,
        required:true
    },
    AllocateName:{
        type:String,
        required:true
    },
    AllocateEmail:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('AllocatePanel', AllocatePSchema);

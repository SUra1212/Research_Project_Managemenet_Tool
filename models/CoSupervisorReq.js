const mongoose = require('mongoose');

const CoSupRequSchema = new mongoose.Schema({

    tlsname:{
        type:String,
        required:true
    },
    tlsid:{
        type:String,
        required:true
    },
    cosupname:{
        type:String,
        required:true
    },
    cosupemail:{
        type:String,
        required:true
    }
    
});

module.exports = mongoose.model('CoSupRequest', CoSupRequSchema);
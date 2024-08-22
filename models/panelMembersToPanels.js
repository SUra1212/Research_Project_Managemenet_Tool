const mongoose = require('mongoose');

const makePanelsSchema = new mongoose.Schema({
    //variables
        Sliit_Staff_ID:{
            type:String,
            requred:true 
        },
        PanelMemberName:{
            type:String,
            required:true
        },
        Email:{
            type:String,
            required:true
        },
        PanelNo:{
            type:Number,
            required:true
        }
    });
    
    module.exports = mongoose.model('makePanels', makePanelsSchema);
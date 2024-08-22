const mongoose = require('mongoose');

const AdminuploadSchema = new mongoose.Schema({
    name:{
        type: String,
      },
    description:{
        type:String,
    },
    pdf:{
        type: String,
    },
    cloudinary_id_pdf: {
        type: String,
    }
});

module.exports = mongoose.model("AdminUpload", AdminuploadSchema);
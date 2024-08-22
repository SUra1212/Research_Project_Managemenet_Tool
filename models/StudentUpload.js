const mongoose = require('mongoose');

const StudentUploadSchema = new mongoose.Schema({
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

module.exports = mongoose.model("StudentUpload", StudentUploadSchema);
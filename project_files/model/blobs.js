var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  msg: String,
  email: String,
  dob: { type: Date, default: Date.now }
});
mongoose.model('Blob', blobSchema);

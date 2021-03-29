const mongoose = require("mongoose");

const schema = mongoose.Schema;
const docteurSchema = new schema({
 status : {
   type : Boolean,
   default :false
 },
 images : {
   type : Array
 },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
  qualification: { type: String, required: true },
  Phone: { type: Number, required: true },
  localisation: { type: String, required: true },
  worktime: String,
  emplacementEducation: { type: String, required: true }

});
module.export = Docteur = mongoose.model("docteur", docteurSchema);

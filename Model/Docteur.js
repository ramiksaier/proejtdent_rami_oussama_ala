const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const docteurSchema = new schema({
  firstName: String,
  lastName: String,
  status: {
    type: Boolean,
    default: false,
  },
  images: String,

  qualification: { type: String, required: true },
  Phone: { type: Number, required: true },
  localisation: { type: String, required: true },
  worktime: String,
  emplacementEducation: { type: String, required: true },
});
module.export = Docteur = mongoose.model("docteur", docteurSchema);

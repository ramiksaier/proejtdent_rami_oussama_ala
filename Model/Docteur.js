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
  age: Number,
  images: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  qualification: { type: String, required: true },
  Phone: { type: Number, required: true },
  PhoneCab: Number,
  localisation: { type: String, required: true },
  worktime: String,
  emplacementEducation: { type: String, required: true },
});
module.exports = Docteur = mongoose.model("docteur", docteurSchema);

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const patientSchema = new schema({
  image: String,

  adress: String,

  phone: Number,
});
module.exports = Patient = mongoose.model("patient", patientSchema);

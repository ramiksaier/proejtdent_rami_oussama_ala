const mongoose = require("mongoose");

const schema = mongoose.Schema;

const patientSchema = new schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  sex: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: Number,
  image: String,

  adress: String,

  Phone: Number,
});
module.exports = Patient = mongoose.model("patient", patientSchema);

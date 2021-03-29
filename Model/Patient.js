const mongoose = require("mongoose");

const schema = mongoose.Schema;

const patientSchema = new schema({
  image: String,

  adress: String,

  phone: Number,
  userId: {
    type: schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
module.exports = Patient = mongoose.model("patient", patientSchema);

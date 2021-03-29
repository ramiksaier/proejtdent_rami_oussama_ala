const mongoose = require("mongoose");

const schema = mongoose.Schema;
const docteurSchema = new schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  qualification: { type: String, required: true },
  Phone: { type: Number, required: true },
  localisation: { type: String, required: true },
  worktime: String,
  emplacementEducation: { type: String, required: true },
  role: { type: String, required: true },

});
module.export = Docteur = mongoose.model("docteur", docteurSchema);

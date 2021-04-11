const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const adminSchema = new schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.export = Admin = mongoose.model("admin", adminSchema);

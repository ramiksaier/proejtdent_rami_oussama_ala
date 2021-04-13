const mongoose = require("mongoose");

const schema = mongoose.Schema;
const rendezvousSchema = new schema({
  jour: String,
  dateRen: {
    type: String,
    required: true,
  },
 
  description: String,
});
module.export = Rendezvous = mongoose.model("rendezvous", rendezvousSchema);

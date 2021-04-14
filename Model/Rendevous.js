const mongoose = require("mongoose");

const schema = mongoose.Schema;
const rendezvousSchema = new schema({
  id_doc: String,
  id_pat:String,
  jour: String,
  dateRen: {
    type: String,
    required: true,
  },
 
  description: String,
});
module.export = Rendezvous = mongoose.model("rendezvous", rendezvousSchema);

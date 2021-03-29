const mongoose = require("mongoose");

const schema = mongoose.Schema;
const rendezvousSchema = new schema({
  dateDebut: {
    type: Number,
    required: true,
  },
  dateFin: {
    type: Number,
    required: true,
  },

  description: String,
  

});
module.export = Rendezvous = mongoose.model("rendezvous", rendezvousSchema);
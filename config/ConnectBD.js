const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.BD_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("data base connected");
  } catch (error) {
    console.log("data base no connected ", error);
  }
};
// exoprt
module.exports = connectDB;

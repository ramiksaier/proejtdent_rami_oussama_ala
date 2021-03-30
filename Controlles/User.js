const User = require("../Model/User");
////POST User
exports.postUser = async (req, res) => {
  try {
    const { email, password, firstName, lastName, role } = req.body;
    //handling errors:email et password required
    if (!email || !password || !firstName || !lastName || !role) {
      res.status(400).send({ msg: "Email et Password are required!!!" });
      return;
    }
    //handling errors:email et unique

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).send({ msg: "User already exist!!!" });
      return;
    }
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role,
    });
    await newUser.save();
    res.status(200).send({ msg: "User added successfully...", newUser });
  } catch (error) {
    res.status(400).send({ msg: "can not  add User", error });
  }
};
////Get  User
exports.getUser = async (req, res) => {
  try {
    const contactToGet = await User.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "I get the user...", contactToGet });
  } catch (error) {
    res.status(400).send({ msg: "I can get with user id...", contactToGet });
  }
};
//Get ALL User
exports.getUsers = async (req, res) => {
  try {
    const listUsers = await User.find();
    res.status(200).send({ msg: "this is liste of all users...", listUsers });
  } catch (error) {
    res.status(400).send({ msg: "can not get all users", error });
  }
};
// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    await User.findOneAndDelete({ _id });
    res.status(200).send({ msg: "User Deleted... " });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "can not deleted contact with this id!!", error });
  }
};
// Updaet
exports.updateUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await User.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "User Update... " });
  } catch (error) {
    res.status(400).send({ msg: "can not update user with id !!!", error });
  }
};

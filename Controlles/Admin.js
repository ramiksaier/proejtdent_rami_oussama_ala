const Admin = require("../Model/Admin");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
Signup = async (req, res) => {
  try {
    //   req.body
    const { firstName, lastName, email, password } = req.body;

    // check if the email is not found in the database
    const FoundUser = await Admin.findOne({ email });

    if (FoundUser) {
      res.status(400).send({
        errors: [{ msg: "user already exist email should be unique" }],
      });
      return;
    }
    const newAdmin = new Admin({
      firstName,
      lastName,
      email,
      password,
    });

    // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newAdmin.password = hashedpassword;

    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newAdmin._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    //then we save it in the database
    await newAdmin.save();
    res.status(200).send({ msg: "user saved succ", Admin: newAdmin, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the user" }] });
  }
};

SignIn = async (req, res) => {
  try {
    // get the req.body
    const { email, password } = req.body;
    // seach if the user exist
    const searchUser = await Admin.findOne({ email });

    // send an error if he didnt exist
    if (!searchUser) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchUser.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", user: searchUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};

afficheadmins = async (req, res) => {
  try {
    const list = await Admin.find();
    res.send({ msg: "this is your data", list });
  } catch (error) {
    res.status(400).send("can not get the data");
  }
};
afficheOneadmin = async (req, res) => {
  try {
    const getone = await Admin.findOne({ _id: req.params._id });
    res
      .status(200)
      .send({ message: "this is the admin you looking for", getone });
  } catch (error) {
    res.status(400).send("could not get this id ,please check you again id  ");
  }
};
Deleteadmin = async (req, res) => {
  try {
    const result = await Admin.deleteOne({ _id: req.params._id });

    result.n
      ? res.status(200).send("admin is deletetd")
      : res.status(400).send("ther is no admin with this id");
  } catch (error) {
    res.status(400).send("can not delet it please check again");
  }
};
updateadmin = async (req, res) => {
  try {
    const result = await Admin.updateOne(
      { _id: req.params._id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.status(200).send({ message: "admin updated" })
      : res.send("admin already updated");
  } catch (error) {
    res.status(400).send("can not find the admin you looking for");
  }
};

//export methode
module.exports = controller = {
  Signup,
  SignIn,
  afficheadmins,
  afficheOneadmin,
  Deleteadmin,
  updateadmin,
};

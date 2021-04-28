const Patient = require("../Model/Patient");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
Signup = async (req, res) => {
  try {
    //   req.body
    const {
      firstName,
      lastName,
      image,
      age,
      status,
      email,
      adress,
      sex,
      Phone,
      password,
    } = req.body;

    // check if the email is not found in the database
    const FoundUser = await Patient.findOne({ email });

    if (FoundUser) {
      res.status(400).send({
        errors: [{ msg: "user already exist email should be unique" }],
      });
      return;
    }
    const newPatient = new Patient({
      firstName,
      lastName,
      image,
      age,
      adress,
      status,
      sex,
      email,
      Phone,
      password,
    });

    // hash the password
    const hashedpassword = await bcrypt.hashSync(password, salt);
    newPatient.password = hashedpassword;

    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newPatient._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    //then we save it in the database
    await newPatient.save();
    res
      .status(200)
      .send({ msg: "user saved succ", Patient: newPatient, token });
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
    const searchUser = await Patient.findOne({ email });

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

affichePatients = async (req, res) => {
  try {
    const list = await Patient.find();
    res.send({ msg: "this is your data", list });
  } catch (error) {
    res.status(400).send("can not get the data");
  }
};
afficheOnePatient = async (req, res) => {
  try {
    const getone = await Patient.findOne({ _id: req.params._id });
    res.status(200).send({ message: "this is who you looking for", getone });
  } catch (error) {
    res.status(400).send("could not get this id ,please check you again id  ");
  }
};
DeletePatient = async (req, res) => {
  try {
    const result = await Patient.deleteOne({ _id: req.params._id });

    result.n
      ? res.status(200).send("patient is deletetd")
      : res.status(400).send("ther is no user with this id");
  } catch (error) {
    res.status(400).send("can not delet it please check again");
  }
};
updatePatient = async (req, res) => {
  try {
    const result = await Patient.updateOne(
      { _id: req.params._id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.status(200).send({ message: "user updated" })
      : res.send("user already updated");
  } catch (error) {
    res.status(400).send("can not find the user you looking for");
  }
};
//export methode
module.exports = controller = {
  Signup,
  SignIn,
  affichePatients,
  afficheOnePatient,
  DeletePatient,
  updatePatient,
};

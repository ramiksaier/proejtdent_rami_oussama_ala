const Docteur = require("../Model/Docteur");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
Signup = async (req, res) => {
  try {
    //   req.body
    const {
      firstName,
      lastName,
      images,
      age,
      status,
      worktime,
      email,
      localisation,
      Phone,
      PhoneCab,
      qualification,
      emplacementEducation,
      password,
    } = req.body;

    // check if the email is not found in the database
    const FoundUser = await Docteur.findOne({ email });

    if (FoundUser) {
      res.status(400).send({
        errors: [{ msg: "docteur already exist email should be unique" }],
      });
      return;
    }
    const newDocteur = new Docteur({
      firstName,
      lastName,
      images,
      age,
      status,
      worktime,
      email,
      localisation,
      Phone,
      PhoneCab,
      qualification,
      emplacementEducation,
      password,
    });

    // hash the password
    const hashedpassword = await bcrypt.hashSync(password, salt);
    newDocteur.password = hashedpassword;

    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newDocteur._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    //then we save it in the database
    await newDocteur.save();
    res
      .status(200)
      .send({ msg: "user saved succ", docteur: newDocteur, token });
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
    const searchUser = await Docteur.findOne({ email });

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
    res.status(200).send({ msg: "login success", user: searchUser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not Sign In" }] });
  }
};

affichedocteur = async (req, res) => {
  try {
    const list = await Docteur.find();
    res.send({ msg: "this is your data", list });
  } catch (error) {
    res.status(400).send("can not get the data");
  }
};
afficheOnedocteur = async (req, res) => {
  try {
    const getone = await Docteur.findOne({ _id: req.params._id });
    res
      .status(200)
      .send({ message: "this is the doctor you looking for", getone });
  } catch (error) {
    res.status(400).send("could not get this id ,please check you again id  ");
  }
};
Deletedocteur = async (req, res) => {
  try {
    const result = await Docteur.deleteOne({ _id: req.params._id });

    result.n
      ? res.status(200).send("docteur is deletetd")
      : res.status(400).send("ther is no docteur with this id");
  } catch (error) {
    res.status(400).send("can not delet it please check again");
  }
};
updatedocteur = async (req, res) => {
  try {
    const result = await Docteur.updateOne(
      { _id: req.params._id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.status(200).send({ message: "docteur updated" })
      : res.send("docteur already updated");
  } catch (error) {
    res.status(400).send("can not find the docteur you looking for");
  }
};

//export methode
module.exports = controller = {
  affichedocteur,
  afficheOnedocteur,
  Deletedocteur,
  updatedocteur,
  Signup,
  SignIn,
};

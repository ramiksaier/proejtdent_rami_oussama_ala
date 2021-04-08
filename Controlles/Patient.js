const addPatient = async (req, res) => {
  try {
    if (!req.body.Phone) {
      res.send(" checked again please");
      return;
    }
    const newPatient = new Patient({ ...req.body });
    const Pat = await Patient.findOne({ Phone: req.body.Phone });
    if (Pat) {
      res.send("patient exist");
    }
    const response = await newPatient.save();
    res
      .status(200)
      .send({ response: response, message: "Patient added sucufully" });
  } catch (error) {
    res.status(400).send("user no added :can not save it ");
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
  addPatient,
  affichePatients,
  afficheOnePatient,
  DeletePatient,
  updatePatient,
};

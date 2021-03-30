const adddocteur = async (req, res) => {
  try {
    if (
      !req.body.qualification ||
      !req.body.Phone ||
      !req.body.localisation ||
      !req.body.emplacementEducation
    ) {
      res.send("last and first name are required checked again please");
      return;
    }

    const newDocteur = new Docteur({ ...req.body });
    const doct = await Docteur.findOne({ Phone: req.body.Phone });
    if (doct) {
      res.send("docteur already exist");
      return;
    }

    const response = await newDocteur.save();

    res
      .status(200)
      .send({ response: response, message: "docteur added sucufully" });
  } catch (error) {
    res.status(400).send("docteur no added :can not save it ");
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
  adddocteur,
  affichedocteur,
  afficheOnedocteur,
  Deletedocteur,
  updatedocteur,
};

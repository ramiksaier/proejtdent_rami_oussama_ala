const adddrendezvous = async (req, res) => {
  try {
    if (!req.body.dateRen || !req.body.jour) {
      res.send("date debut and date fin are required checked again please");
      return;
    }

    const newrendezvous = new Rendezvous({ ...req.body });
    const doct = await Rendezvous.findOne({ dateRen: req.body.dateRen });
    if (doct) {
      res.send("rendez vous already exist");
      return;
    }

    const response = await newrendezvous.save();

    res
      .status(200)
      .send({ response: response, message: "docteur added sucufully" });
  } catch (error) {
    res.status(400).send("docteur no added :can not save it ");
  }
};

afficherendezvous = async (req, res) => {
  try {
    const list = await Rendezvous.find();
    res.send({ msg: "this is your data", list });
  } catch (error) {
    res.status(400).send("can not get the data");
  }
};
afficheOnerendezvous = async (req, res) => {
  try {
    const getone = await Rendezvous.find({ id_doc: req.params._id });
    res
      .status(200)
      .send({ message: "this is the rendez vous you looking for", getone });
  } catch (error) {
    res.status(400).send("could not get this id ,please check you again id  ");
  }
};
afficheOnerendezvousbyDoctorid = async (req, res) => {
  try {
    const list = await Rendezvous.find({ id_doc: req.params.id_doc });
    res.send({ msg: "this is your rendezvous", list });
    console.log(list);
  } catch (error) {
    res.status(400).send("can not get the data");
  }
};
Deleterendezvous = async (req, res) => {
  try {
    const result = await Rendezvous.deleteOne({ _id: req.params._id });

    result.n
      ? res.status(200).send("Rendez vous is deletetd")
      : res.status(400).send("ther is no rendez vous with this id");
  } catch (error) {
    res.status(400).send("can not delet it please check again");
  }
};
updaterendezvous = async (req, res) => {
  try {
    const result = await Rendezvous.updateOne(
      { _id: req.params._id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.status(200).send({ message: "REndezvous updated" })
      : res.send("Rendez vous already updated");
  } catch (error) {
    res.status(400).send("can not find the rendez vous you looking for");
  }
};

//export methode
module.exports = controller = {
  adddrendezvous,
  afficherendezvous,
  afficheOnerendezvous,
  afficheOnerendezvousbyDoctorid,
  Deleterendezvous,
  updaterendezvous,
};

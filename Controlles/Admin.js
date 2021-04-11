const addadmin = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      res.send("last and first name are required checked again please");
      return;
    }
    const newAdmin = new Admin({ ...req.body });
    const adm = await Admin.findOne({ Phone: req.body.email });
    if (adm) {
      res.send("admin already exist");
      return;
    }
    const response = await newAdmin.save();
    res
      .status(200)
      .send({ response: response, message: "Admin added sucufully" });
  } catch (error) {
    res.status(400).send("admin no added :can not save it ");
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
  addadmin,
  afficheadmins,
  afficheOneadmin,
  Deleteadmin,
  updateadmin,
};

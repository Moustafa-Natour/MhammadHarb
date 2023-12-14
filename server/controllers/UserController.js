const UserModel = require('../models/UserModel');

module.exports.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.send(users);
};
module.exports.saveUser = (req, res) => {
    const { User } = req.body;
    if (User) {
        try {
            console.log(User);
            UserModel.create(User).then((data) => {
                console.log("Saved Successfully ", data);
                res.status(201).send(data);
            }).catch((err) => {
                console.log(err);
                res.send({ error: err, msg: "Something went wrong!" });
            });
        } catch (err) {
            console.log("Something went wrong!" + err)
        }
    }
};

module.exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { User } = req.body;
    UserModel.findByIdAndUpdate(id, { User })
        .then(() => {
            res.send("Updated successfully");
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong!" });
        });
};

module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    UserModel.findByIdAndDelete(id)
        .then(() => {
            res.send("Deleted successfully");
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong!" });
        });
};

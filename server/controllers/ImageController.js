const ImageModel = require('../models/ImageModel');

module.exports.getImages = async (req, res) => {
    const images = await ImageModel.find();
    res.send(images);
};

module.exports.saveImage = (req, res) => {
    const { Image } = req.body;
    if (Image) {
        ImageModel.create(Image).then((data) => {
            console.log("Saved Successfully ", data);
            res.status(201).send(data);
        }).catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong!" });
        });
    }
};
module.exports.updateImage = (req, res) => {
    const { id } = req.params;
    const { Image } = req.body;
    ImageModel.findByIdAndUpdate(id, { Image })
        .then(() => {
            res.send("Updated successfully");
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong!" });
        });
};

module.exports.deleteImage = (req, res) => {
    const { id } = req.params;
    ImageModel.findByIdAndDelete(id)
        .then(() => {
            res.send("Deleted successfully");
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong!" });
        });
};
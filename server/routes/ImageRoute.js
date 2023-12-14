const { Router } = require('express');
const { getImages, saveImage, updateImage, deleteImage } = require('../controllers/ImageController');
const router = Router();
router.get("/getImages", getImages);
router.post("/saveImage", saveImage);
router.put("/updateImage/:id", updateImage);
router.delete("/deleteImage/:id", deleteImage);
module.exports = router;
const { Router } = require('express');
const { getUsers, saveUser, updateUser, deleteUser } = require('../controllers/UserController');
const router = Router();
router.get("/getUsers", getUsers);
router.post("/saveUser", saveUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
module.exports = router;
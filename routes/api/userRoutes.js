const router = require('express').Router();
const {
  getOneUser,
  getAllUsers,
  createUser,
} = require('../../controllers/userController');


router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getOneUser);

module.exports = router;
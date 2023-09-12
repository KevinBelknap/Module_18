const router = require('express').Router();
const {
  getAllThoughts,
  getOneThoughts,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');


router.route('/').get(getAllThoughts).post(createThought);


router
  .route('/:thoughtId')
  .get(getOneThoughts)
  .put(updateThought)
  .delete(deleteThought);


router.route('/:thoughtId/reaction').post(createReaction);

router.route('/:thoughtId/tags/:reactionId').delete(deleteReaction);

module.exports = router;

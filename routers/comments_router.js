const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments_controller");
const { authenticated } = require("../middlewares/user_auth");

//shows iternay comment
router.get(
  "/itnerary/:itineraries",
  authenticated,
  commentsController.showitinerarycomments
);

//show route for comments
router.get("/:user", authenticated, commentsController.showusercomments);

//create route
router.post(
  "/:user/itinerary/:itineraries/new",
  authenticated,
  commentsController.create
);

//update
router.put("/:id", authenticated, commentsController.update);

//delete
router.delete("/:id", authenticated, commentsController.delete);

module.exports = router;

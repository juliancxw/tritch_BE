const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const userController = require("../controllers/users_controller");
const { authenticated, unauthenticated } = require("../middlewares/user_auth");

const cloudinaryStorageStrategy = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "tritch_BE",
  },
});

// ROUTES //

router.post(
  "/register",
  uploadParser.single("image"),
  unauthenticated,
  userController.register
);

router.post("/login", unauthenticated, userController.login);

router.patch("/:userID", authenticated, userController.updateParticulars);

router.patch(
  "/change-password/:userID",
  authenticated,
  userController.changePassword
);

router.get("/logout", authenticated, userController.logout);

router.get("/show/all", userController.showAll);

router.get("/show/:userID", authenticated, userController.showOne);

module.exports = router;

const router = require("express").Router();

const userController = require("../controlers/userController");

// update user
router.put("/:id", userController.updatedUser);
// delete user

router.delete("/:id", userController.deleteUser);
// get user

router.get("/:id", userController.getUser);

// follow and unfollow users

router.put("/:id/follow", userController.followUser);

router.put("/:id/unfollow", userController.unfollowUser);

module.exports = router;
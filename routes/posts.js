const router = require("express").Router();

const postController = require("../controlers/postController");

// create post

router.post("/", postController.createPost);


// update post
router.put("/:id", postController.updatePost);

// delete post

router.delete("/:id", postController.deletePost);

// like and dislike posts
router.put("/:id/like", postController.likePost);

router.get("/:id", postController.getSinglePost);

// view timeline

router.get("/timeline/all", postController.getFollowingsUserPosts);
module.exports = router;
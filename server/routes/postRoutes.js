const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Post = mongoose.model("posts");

module.exports = app => {
  app.get("/api/posts", async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
  });

  app.post("/api/posts", requireLogin, async (req, res) => {
    const text = req.body.posts;

    const post = new Post({
      text,
      _user: req.user.id,
      datePosted: Date.now()
    });
    await post.save();
    res.status(200).send(post);
  });

  app.delete("/api/posts/:id", requireLogin, async (req, res) => {
    let found = await Post.findById(req.params.id);
    if (found._user.toString() !== req.user.id) {
      return res.status(401).json({ notauthorized: "User not authorized" });
    } else {
      found.remove();
      res.status(200).json(found);
    }
  });
};

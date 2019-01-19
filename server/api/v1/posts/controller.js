// List all posts
exports.all = (req, res, next) => {
  res.json([]);
};

// Create new post
exports.create = (req, res, next) => {
  res.status(201);
  const { body } = req;
  res.json({
    message: 'New post created',
    post: body,
  });
};

// Get post by Id
exports.read = (req, res, next) => {
  res.json({
    id: req.params.id,
  });
};

// Update post by Id
exports.update = (req, res, next) => {
  res.json({
    id: req.params.id,
  });
};

// Delete post by Id
exports.delete = (req, res, next) => {
  res.json({});
};

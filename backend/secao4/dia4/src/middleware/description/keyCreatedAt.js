const keyCreatedAt = (req, res, next) => {
  const {description: {createdAt}} = req.body;
  const isntNan = Date.parse(createdAt);
  const testBarra = createdAt.split('').filter((e) => e === '/').length !== 2;
  if(!isntNan || testBarra) return res
    .status(400)
    .json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" })
  return next();
}

module.exports = keyCreatedAt;

const postKeydescription = (req, res, next) => {
  const {description} = req.body;
  if(!description) return res
    .status(400)
    .json({ message: `O campo description é obrigatório` });
  const {createdAt, rating, difficulty} = description;
  const valNull = !createdAt ? 'createdAt' : ((!rating) ? 'rating' : 'difficulty');
  if (!createdAt || !rating || !difficulty) return res
    .status(400)
    .json({ message: `O campo ${valNull} é obrigatório` })
  return next();
}

module.exports = postKeydescription;

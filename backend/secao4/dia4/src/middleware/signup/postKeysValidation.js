const postKeysValidation = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;
  const keyInvalid = !email ? 'email' : (!password ? 'password' : (!firstName ? 'firstName' : 'phone'));
  if (!email || !password || !firstName || !phone) return res
    .status(401).json({ "message": `Campo ${keyInvalid} ausente!` })
  return next();
}

module.exports = postKeysValidation;

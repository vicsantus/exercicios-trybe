// const movies = require('./movies.json');
const fs = require('fs');
const app = require('./app');

let movies = JSON.parse(fs.readFileSync('./src/movies.json'));

console.log(movies);

app.listen(3001, () => console.log('server running on port 3001'));
app.get('/movies', (req, res) => res.status(200).json(movies));
app.post('/movies', (req, res) => {
  const newMovie = { id: Math.max(...movies.map((ele) => ele.id)) + 1, ...req.body };
  movies.push(newMovie);
  res.status(200).json(movies);
});
app.get('/movies/:id', (req, res) => {
  res.status(200).json(movies.filter((ele) => ele.id === +req.params.id));
});
app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const newMovie = movies.filter((ele) => ele.id === +id);
  newMovie[0].movie = movie;
  newMovie[0].price = price;
  res.status(200).json(movies);
});
app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  movies = movies.filter((ele) => ele.id !== +id);
  res.status(200).json(movies);
});

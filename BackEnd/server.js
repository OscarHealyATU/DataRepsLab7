import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// Load env vars from .env (if present)
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

const Movie = mongoose.model('Movie', movieSchema);

app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection (try environment first, otherwise use local default)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lab_six_db';

// Use recommended mongoose settings
mongoose.set('strictQuery', false);

mongoose.connect(MONGODB_URI, {
  // these options are not required in recent mongoose versions but harmless to include
  // keep compatibility across versions
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err.message || err);
  console.error('Server will continue running but database operations will fail until a valid MONGODB_URI is provided.');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});
app.get('/api/movie/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.send(movie);
});
app.get('/api/movies', (req, res) => {
  const myMovies = [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ]
  res.json({ myArray: myMovies });
})


// app.post('/api/movies', (req, res) => {
//   console.log(req.body);
//   res.send('POST request to the movies endpoint');
// });
 app.post('/api/movies', async (req, res)=>{

 const { title, year, poster } = req.body;

 const newMovie = new Movie({ title, year, poster });
 await newMovie.save();

 res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
 })

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`MongoDB URI: ${process.env.MONGODB_URI ? '[from env]' : '[using default local mongodb://127.0.0.1:27017]'}`);
});
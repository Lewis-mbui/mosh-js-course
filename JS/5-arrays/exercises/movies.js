const movies = [
  {title: 'a', year: 2018, rating: 4.5 },
  {title: 'b', year: 2018, rating: 4.7 },
  {title: 'c', year: 2018, rating: 3 },
  {title: 'd', year: 2017, rating: 4.5 }
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

/*
const filtered = [];

for (let movie of movies) {
  if (movie.year === 2018 && movie.rating > 4) filtered.push(movie);
}

console.log(filtered);

filtered.sort((a, b) => {
  if (a.rating > b.rating) return -1;
  if (a.rating < b.rating) return 1;
  return 0;
});

console.log(filtered);

for (movie of filtered) console.log(movie.title); */

const titles = movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

  console.log(titles);


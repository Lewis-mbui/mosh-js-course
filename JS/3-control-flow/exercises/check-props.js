const movie = {
  title: 'El Camino',
  releaseYear: 2021,
  rating: 4.8,
  leadActor: 'Bryan Cranston'
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof(obj[key]) === 'string') console.log(key, obj[key]);
}
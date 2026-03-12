//Movie Streaming Platform
console.log('Assignment4(Adv):')
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//Only Sci-Fi movies
const sciFiMovies=movies.filter(moviesObj=>moviesObj.genre==='Sci-Fi')
console.log('The movies in Sci-Fi genre:',sciFiMovies)

//Map to return Inception (8.8)
const inceptionText = movies.map(moviesObj => moviesObj.title === "Inception" ? `${moviesObj.title} (${moviesObj.rating})` : null)
console.log(inceptionText)

//Reduce to find average ratings
const avgRating=movies.reduce((acc,moviesObj)=>acc+moviesObj.rating,0)
console.log('The average rating:',avgRating/movies.length)

//FInd movie called Joker
const jokerMovie=movies.find(moviesObj=>moviesObj.title==='Joker')
console.log('The movie titled Joker:',jokerMovie)

//Index of Avengers
const indexAvengers=movies.findIndex(moviesObj=>moviesObj.title==='Avengers')
console.log('The index of the movie titled Avengers:',indexAvengers)

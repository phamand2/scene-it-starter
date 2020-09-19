function renderMovies(moviesArray){
  let movieHtmlArray = moviesArray.map(function (currentMovie) {
    
    return`<div class='col-12 col-md-6 col-lg-4'>
            <div class='card'>
            <img class='card-img-top' src=${currentMovie.Poster}>
            <div class='card-body'>
            <h2>${currentMovie.Title}</h2>
            <h3>${currentMovie.Year}</h3>
            <a href='#'  class='btn btn-primary' onClick="saveToWatchList('${currentMovie.imdbID}')">Add</a>
            </div>
            </div>
          </div>`


  })
  return movieHtmlArray.join('')

}

  let movies = document.querySelector('.movies-container')
  movies.innerHTML = renderMovies(movieData)(JSON.parse(localStorage.getItem('movieData')))
  
  
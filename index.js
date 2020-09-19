function saveToWatchList(imdbID) {
  // saveToWatch = []
  const movieDataString = JSON.stringify(movieData);
  localStorage.setItem('movieData', movieDataString)
  let data = (localStorage.getItem('movieData'))
  let movie = movieData.find((currentMovie) => {return currentMovie.imdbID == imdbID})
  let watchList = JSON.parse(data)
      if(watchList === null) {
          watchList = []
      }
  
      watchList.push(movie)
  }
  
  
  // document.addEventListener('DOMContentLoaded', function() {
  function renderMovies(movieArray) {
  const movieHtmlArray = movieArray.map(function(currentMovie) {
      return `
              <div class='col-12 col-md-6 col-lg-4'>
              <div class="card">
                  <img class='card-img-top' src="${currentMovie.Poster} class="card-img-top" alt="movieposter">
                  <div class="card-body">
                  <h5 class="card-title">${currentMovie.Title}</h5>
                  <p class="card-text">${currentMovie.Year}</p>
                  <a href="#" onclick="saveToWatchList('${currentMovie.imdbID}')"  class="btn btn-primary">Add</a>
                  </div>
                  </div>
              </div>`

  });
  
  
  
      return movieHtmlArray.join('');
      }
      const movieContainer = document.querySelector('.movies-container')
    // code here will execute after the document is loaded
  // });
  
      const myForm = document.getElementById('search-form');
  
      myForm.addEventListener('submit', function(e){
      const searchString =  document.querySelector('.search-bar').value
      let urlEncodedSearchString = encodeURIComponent(searchString);
      e.preventDefault()
      axios.get(`http://www.omdbapi.com/?apikey=b43843a0&s=${urlEncodedSearchString}`)
      .then((response)=> {
          movieContainer.innerHTML = renderMovies(response.data.Search)
          moviesArray = response.data.search
          console.log(response.data)
  
      })
      
      // event listener code goes here
  })
  
  
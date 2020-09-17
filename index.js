// document.addEventListener('DOMContentLoaded', function() {
//   function renderMovies(moviesArray){
//     let movieHtmlArray = moviesArray.map(function (currentMovie) {
//       return`<div class='col-12 col-md-6 col-lg-4'>
//               <div class='card'>
//               <img class='card-img-top' src=${currentMovie.Poster}>
//               <div class='card-body'>
//               <h1>${currentMovie.Title}</h1>
//               <h2>${currentMovie.Year}</h2>
//               <a href='#' class='btn btn-primary'>Add</a>
//               </div>
//               </div>
//             </div>`
  

//     })
//     return movieHtmlArray.join('')

//   }
  
//   let movies = document.querySelector('.movies-container')
//   movies.innerHTML = renderMovies(movieData)


// });


const myform = document.querySelector('#search-form')
myform.addEventListener('click',(event)=> {
  event.preventDefault()
  function renderMovies(moviesArray){
    let movieHtmlArray = moviesArray.map(function (currentMovie) {
      return`<div class='col-12 col-md-6 col-lg-4'>
              <div class='card'>
              <img class='card-img-top' src=${currentMovie.Poster}>
              <div class='card-body'>
              <h1>${currentMovie.Title}</h1>
              <h2>${currentMovie.Year}</h2>
              <a href='#' class='btn btn-primary'>Add</a>
              </div>
              </div>
            </div>`
  

    })
    return movieHtmlArray.join('')

  }
  
  let movies = document.querySelector('.movies-container')
  movies.innerHTML = renderMovies(movieData)
}
)

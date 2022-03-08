const API_URL = 'https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.wmdb.tv/api/v1/movie/search?q='

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    showMovies(data)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        // const { alias:title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${movie.data[0].shareImage}" alt="${movie.data[0].name}">
            <div class="movie-info">
                <h3>${movie.data[0].name}</h3>
                <span class="${getClassByRate(movie.doubanRating)}">${movie.doubanRating}</span>
            </div>
            <div class="overview">
          <h3>概览</h3>
          ${movie.data[0].description}
        </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})
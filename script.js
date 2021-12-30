const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cad293453ae8fafb1b5a3452cd80e2d7&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=cad293453ae8fafb1b5a3452cd80e2d7&query="';

const main = document.getElementById("main");
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = ' ';

    movies.forEach((movie) =>{
        const {title, poster_path, vote_average,overview} = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = ` 
        
        <img src="${IMG_PATH + poster_path}" >
    <div id="movie-info">
        <h3>${title}</h3>
        <span class="${(getColorByRate(vote_average))}" id = "rating">${(vote_average)}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        ${(overview)}

    </div> `
    main.appendChild(movieEl);
    })
}

function getColorByRate(vote){
if(vote >= 8)
return 'green';
else if (vote>=5 && vote <8)
return 'orange';
else
return 'red';
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const searchTerm  = search.value;

    if(searchTerm && searchTerm !== ' ')//to check if the given term exists
    {
        getMovies(SEARCH_API + searchTerm);

        searchTerm.value = ' ';
        
    }else{
        window.location.reload();
    }
})
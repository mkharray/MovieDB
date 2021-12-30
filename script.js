const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cad293453ae8fafb1b5a3452cd80e2d7&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=cad293453ae8fafb1b5a3452cd80e2d7&query="';


const form = document.getElementById('form');
const search = document.getElementById('search');
getMovies(API_URL);
async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const searchTerm  = search.value;

    if(searchTerm && searchTerm !== '')//to check if the given term exists
    {
        getMovies(SEARCH_API + searchTerm);

        searchTerm.value = ' ';
        
    }else{
        window.location.reload();
    }
})
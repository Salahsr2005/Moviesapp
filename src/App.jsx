import { useEffect, useState } from 'react';
import Search from './components/Search'
import Loader from './components/Loader';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';
import Card from './components/Card';
import { getTrendingMovies, updateSearchCount } from '../appwrite';
function App() {
  const API_BASE_URL = 'https://api.themoviedb.org/3/'
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTIONS = {
    method : 'GET',
    headers:{
      accept:'application/json',
      Authorization :`Bearer ${API_KEY}`
    }
    }
  const [searchTerm,setSearchTerm] = useState('');
  const [trendingMovies,setTrendingMovies] = useState('')
  const [movieList,setMovieList] = useState ([])
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading,setIsLoading] = useState(false)
  const [debounceSearchTerm,setDebounceSearchTerm] = useState('')
  useDebounce(
    () => {
      setDebounceSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );
  const loadTrendingMovies = async()=>{
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies)
    } catch (error) {
      console.error(error)
    }
  }
  const fetchMovies = async (query = '') =>{
    setIsLoading(true);
    setErrorMessage('');
    try{
      const endoint = query
      ?`${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch (endoint,API_OPTIONS)
      if (!response.ok){
        throw new Error('Failed To Fetch Movies')
      }
      const data = await response.json()
      if(data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }
      setMovieList(data.results);
      if(query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    }catch(error){
      console.error(`Error Fetching Movies : ${error}`),
      setErrorMessage ('Error Fetching Movies Please try again later.')
    }finally{
      setIsLoading(false)
    }
  }
  useEffect (()=>{
    fetchMovies(debounceSearchTerm)
  },[debounceSearchTerm])
  useEffect(()=>{
    loadTrendingMovies()
  },[])
  return ( 
  <main>
    <div className='pattern'></div>
    <div className='wrapper'>
      <header>
        <img src="./hero.png" alt="Hero Banner" />
        <h1>Find <span className="text-gradient">Movies</span>You'll Enjoy Without the Hassle</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </header>
              {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}
      <section className='all-movies'>
        <h2 className='text-white '>All Movies</h2>
        {isLoading ?(
          <Loader />
        ):errorMessage ? (
          <Card errorMessage = {errorMessage} />
        ):(
          <ul>
            {movieList.map((movie) =>(
              <MovieCard key={movie.id} movie={movie} onClicked={console.log('im clicked')} />
            ))}
          </ul>
        )}
      </section>
    </div>
  </main>
   );
}

export default App;
